import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// 資料定義
const DOCS: Record<string, { title: string; file: string }> = {
  ai:         { title: '失敗しないAIエージェント導入ガイド',   file: 'ai_guidebook.pdf' },
  newbusiness:{ title: '新規事業開発ガイドブック',             file: 'newbusiness_guidebook.pdf' },
  backoffice: { title: '経理・AI活用ガイドブック',             file: 'keiriai_guidebook.pdf' },
}

export async function POST(req: NextRequest) {
  const { docId, company, name, email } = await req.json()

  // バリデーション
  if (!docId || !company || !name || !email) {
    return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 })
  }
  if (!DOCS[docId]) {
    return NextResponse.json({ error: '不正なdocId' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'メールアドレスの形式が正しくありません' }, { status: 400 })
  }

  const doc = DOCS[docId]

  // メール通知（SMTP設定がある場合のみ）
  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const notifyTo = process.env.NOTIFY_EMAIL || smtpUser

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: smtpUser, pass: smtpPass },
      })

      // 管理者への通知メール
      await transporter.sendMail({
        from: smtpUser,
        to: notifyTo,
        subject: `【資料DL】${doc.title}`,
        text: `資料ダウンロードがありました。\n\n資料：${doc.title}\n会社名：${company}\nお名前：${name}\nメール：${email}\n日時：${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
      })

      // ダウンローダーへの自動返信
      await transporter.sendMail({
        from: `株式会社オルアナ <${smtpUser}>`,
        to: email,
        subject: `【オルアナ】資料をお届けします：${doc.title}`,
        text: `${name} 様\n\nこの度は資料をダウンロードいただき、ありがとうございます。\n\nご請求いただいた資料は自動的にダウンロードが開始されます。\nもし開始されない場合は、お手数ですがお問い合わせください。\n\n─────────────────────\n株式会社オルアナ\nhttps://olana.jp\n─────────────────────`,
      })
    } catch (err) {
      console.error('メール送信エラー:', err)
      // メール失敗してもDLは続行
    }
  }

  // ダウンロードURLを返す（ファイルはpublic/downloadsに配置）
  return NextResponse.json({
    ok: true,
    downloadUrl: `/downloads/${doc.file}`,
    title: doc.title,
  })
}

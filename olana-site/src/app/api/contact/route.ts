import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company, name, email, referral, referralName, message } = body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 管理者への通知メール
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOTIFY_EMAIL,
      subject: `【お問い合わせ】${company} ${name}様`,
      text: `
お問い合わせが届きました。

会社名: ${company}
お名前: ${name}
メール: ${email}
きっかけ: ${referral}${referralName ? `（紹介者: ${referralName}）` : ''}

内容:
${message}

送信日時: ${new Date().toLocaleString('ja-JP')}
      `.trim(),
    })

    // 自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: '【株式会社オルアナ】お問い合わせを受け付けました',
      text: `
${name} 様

この度はオルアナへのお問い合わせありがとうございます。
担当者より2営業日以内にご連絡いたします。

─────────────────────
株式会社オルアナ
info@olana.jp
https://olana.jp
─────────────────────
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

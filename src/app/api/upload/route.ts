import { NextRequest, NextResponse } from 'next/server'
import { getFileSha } from '@/lib/github'

const GITHUB_API = 'https://api.github.com'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const password = formData.get('password') as string
    const file = formData.get('file') as File

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: '認証エラー' }, { status: 401 })
    }
    if (!file) {
      return NextResponse.json({ error: 'ファイルがありません' }, { status: 400 })
    }

    const token = process.env.GITHUB_TOKEN!
    const owner = process.env.GITHUB_OWNER!
    const repo = process.env.GITHUB_REPO!

    // ファイル名をサニタイズ
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
    const filePath = `public/uploads/${safeName}`

    // バイナリをBase64に変換
    const arrayBuffer = await file.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')

    // 既存ファイルのSHA確認（上書き時用）
    const sha = await getFileSha(token, owner, repo, filePath)

    const body: Record<string, string> = {
      message: `Upload image: ${safeName}`,
      content: base64,
    }
    if (sha) body.sha = sha

    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      return NextResponse.json({ error: err.message ?? 'アップロード失敗' }, { status: 500 })
    }

    // GitHubのraw URLを返す
    const imageUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`
    return NextResponse.json({ url: imageUrl, path: filePath })

  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'サーバーエラー' }, { status: 500 })
  }
}

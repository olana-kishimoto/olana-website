import { NextRequest, NextResponse } from 'next/server'
import { commitFile, deleteFile, getFileSha, buildMarkdown } from '@/lib/github'
import { getPostList } from '@/lib/posts'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!
const GITHUB_OWNER = process.env.GITHUB_OWNER!
const GITHUB_REPO = process.env.GITHUB_REPO!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!

function unauthorized() {
  return NextResponse.json({ error: '認証エラー' }, { status: 401 })
}

// 記事一覧取得（管理画面用）
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const password = searchParams.get('password')
  const type = searchParams.get('type') as 'column' | 'info' | null

  if (password !== ADMIN_PASSWORD) return unauthorized()
  if (!type || !['column', 'info'].includes(type)) {
    return NextResponse.json({ error: '不正なtype' }, { status: 400 })
  }

  const posts = getPostList(type)
  return NextResponse.json({ posts })
}

// 記事作成・更新
export async function POST(req: NextRequest) {
  const { password, type, slug, title, date, category, excerpt, thumbnail, body } = await req.json()

  if (password !== ADMIN_PASSWORD) return unauthorized()
  if (!type || !slug || !title || !body) {
    return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 })
  }

  const filePath = `posts/${type}/${slug}.md`
  const content = buildMarkdown({ title, date, category, excerpt, thumbnail, body })

  // 既存ファイルのSHAを取得（更新の場合）
  const sha = await getFileSha(GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, filePath) ?? undefined

  const result = await commitFile({
    token: GITHUB_TOKEN,
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    path: filePath,
    content,
    message: sha ? `update: ${title}` : `add: ${title}`,
    sha,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}

// 記事削除
export async function DELETE(req: NextRequest) {
  const { password, type, slug } = await req.json()

  if (password !== ADMIN_PASSWORD) return unauthorized()

  const filePath = `posts/${type}/${slug}.md`
  const sha = await getFileSha(GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, filePath)

  if (!sha) {
    return NextResponse.json({ error: 'ファイルが見つかりません' }, { status: 404 })
  }

  const result = await deleteFile({
    token: GITHUB_TOKEN,
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    path: filePath,
    message: `delete: ${slug}`,
    sha,
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}

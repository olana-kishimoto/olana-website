// GitHub API を使ってMarkdownファイルをコミットする

const GITHUB_API = 'https://api.github.com'

type CommitFileParams = {
  token: string       // GitHub Personal Access Token
  owner: string       // GitHubユーザー名 or Org名
  repo: string        // リポジトリ名
  path: string        // ファイルパス (例: posts/column/my-article.md)
  content: string     // ファイル内容（生テキスト）
  message: string     // コミットメッセージ
  sha?: string        // 既存ファイル更新時は既存のSHAが必要
}

type DeleteFileParams = {
  token: string
  owner: string
  repo: string
  path: string
  message: string
  sha: string
}

// ファイルの現在のSHAを取得（更新・削除時に必要）
export async function getFileSha(
  token: string,
  owner: string,
  repo: string,
  filePath: string
): Promise<string | null> {
  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${filePath}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
    },
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.sha ?? null
}

// ファイルを作成または更新
export async function commitFile(params: CommitFileParams): Promise<{ ok: boolean; error?: string }> {
  const { token, owner, repo, path, content, message, sha } = params

  const body: Record<string, string> = {
    message,
    content: Buffer.from(content, 'utf8').toString('base64'),
  }
  if (sha) body.sha = sha

  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`, {
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
    return { ok: false, error: err.message ?? 'GitHub APIエラー' }
  }
  return { ok: true }
}

// ファイルを削除
export async function deleteFile(params: DeleteFileParams): Promise<{ ok: boolean; error?: string }> {
  const { token, owner, repo, path, message, sha } = params

  const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, sha }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    return { ok: false, error: err.message ?? '削除エラー' }
  }
  return { ok: true }
}

// Markdownのフロントマターを生成
export function buildMarkdown({
  title,
  date,
  category,
  excerpt,
  thumbnail,
  body,
}: {
  title: string
  date: string
  category?: string
  excerpt?: string
  thumbnail?: string
  body: string
}): string {
  const lines = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `date: "${date}"`,
    `published: true`,
  ]
  if (category) lines.push(`category: "${category}"`)
  if (excerpt) lines.push(`excerpt: "${excerpt.replace(/"/g, '\\"')}"`)
  if (thumbnail) lines.push(`thumbnail: "${thumbnail}"`)
  lines.push('---', '', body)
  return lines.join('\n')
}

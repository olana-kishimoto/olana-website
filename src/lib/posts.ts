import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDir = path.join(process.cwd(), 'posts')

export type PostType = 'column' | 'info'

export type PostMeta = {
  slug: string
  title: string
  date: string
  category?: string
  thumbnail?: string
  published: boolean
  excerpt?: string
}

export type Post = PostMeta & {
  contentHtml: string
}

// 記事一覧取得
export function getPostList(type: PostType): PostMeta[] {
  const dir = path.join(postsDir, type)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '無題',
        date: data.date ?? '',
        category: data.category ?? '',
        thumbnail: data.thumbnail ?? '',
        published: data.published !== false,
        excerpt: data.excerpt ?? '',
      } as PostMeta
    })
    .filter(p => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

// 記事詳細取得
export async function getPost(type: PostType, slug: string): Promise<Post | null> {
  const filepath = path.join(postsDir, type, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title ?? '無題',
    date: data.date ?? '',
    category: data.category ?? '',
    thumbnail: data.thumbnail ?? '',
    published: data.published !== false,
    excerpt: data.excerpt ?? '',
    contentHtml,
  }
}

// slugの一覧（generateStaticParams用）
export function getPostSlugs(type: PostType): string[] {
  const dir = path.join(postsDir, type)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

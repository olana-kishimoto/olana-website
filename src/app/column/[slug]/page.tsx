import { getPost, getPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getPostSlugs('column').map(slug => ({ slug }))
}

export default async function ColumnDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost('column', params.slug)
  if (!post) notFound()

  return (
    <main style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 40px 120px' }}>
        {/* パンくず */}
        <nav style={{ marginBottom: 40, display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
          <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>TOP</a>
          <span>›</span>
          <a href="/column" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>コラム</a>
          <span>›</span>
          <span style={{ color: 'var(--text)' }}>{post.title}</span>
        </nav>

        {/* ヘッダー */}
        <header style={{ marginBottom: 48 }}>
          {post.category && (
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.15em', color: '#9a1a3c', textTransform: 'uppercase', marginBottom: 16 }}>{post.category}</p>
          )}
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, lineHeight: 1.3, marginBottom: 20 }}>{post.title}</h1>
          <time style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'var(--text-muted)' }}>{post.date}</time>
        </header>

        {/* サムネイル */}
        {post.thumbnail && (
          <div style={{ marginBottom: 48, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
            <img src={post.thumbnail} alt={post.title} style={{ width: '100%', display: 'block' }} />
          </div>
        )}

        {/* 本文 */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* 戻るボタン */}
        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <a href="/column" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#9a1a3c', textDecoration: 'none', fontSize: 14, fontWeight: 500,
          }}>← コラム一覧に戻る</a>
        </div>
      </div>
    </main>
  )
}

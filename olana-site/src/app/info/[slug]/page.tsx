import { getPost, getPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getPostSlugs('info').map(slug => ({ slug }))
}

export default async function InfoDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost('info', params.slug)
  if (!post) notFound()

  return (
    <main style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 40px 120px' }}>
        <nav style={{ marginBottom: 40, display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
          <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>TOP</a>
          <span>›</span>
          <a href="/info" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>お知らせ</a>
          <span>›</span>
          <span style={{ color: 'var(--text)' }}>{post.title}</span>
        </nav>

        <header style={{ marginBottom: 48 }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 30, fontWeight: 800, lineHeight: 1.4, marginBottom: 16 }}>{post.title}</h1>
          <time style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'var(--text-muted)' }}>{post.date}</time>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <a href="/info" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#9a1a3c', textDecoration: 'none', fontSize: 14, fontWeight: 500,
          }}>← お知らせ一覧に戻る</a>
        </div>
      </div>
    </main>
  )
}

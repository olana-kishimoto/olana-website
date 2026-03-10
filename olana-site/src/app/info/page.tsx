import { getPostList } from '@/lib/posts'

export default function InfoPage() {
  const posts = getPostList('info')

  return (
    <main style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 60px 120px' }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: '#9a1a3c', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 24, height: 1, background: '#9a1a3c', display: 'inline-block' }}></span>
            Information
          </p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800 }}>お知らせ</h1>
        </div>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '80px 0' }}>お知らせはまだありません。</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post, i) => (
              <a key={post.slug} href={`/info/${post.slug}`} style={{
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'flex-start', gap: 40,
                padding: '28px 0',
                borderTop: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}>
                <time style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'var(--text-muted)', flexShrink: 0, paddingTop: 2 }}>{post.date}</time>
                <span style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.65, flex: 1 }}>{post.title}</span>
                <span style={{ color: '#9a1a3c', fontSize: 16, flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

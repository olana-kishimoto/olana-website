import { getPostList } from '@/lib/posts'

export default function ColumnPage() {
  const posts = getPostList('column')

  const categories = ['すべて', 'AI', '新規事業開発', 'バックオフィス業務']

  return (
    <main style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 60px 120px' }}>
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: '#9a1a3c', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 24, height: 1, background: '#9a1a3c', display: 'inline-block' }}></span>
            Column
          </p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 42, fontWeight: 800, marginBottom: 16 }}>コラム</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.9 }}>
            AI・新規事業開発・バックオフィス業務に関する最新情報をお届けします。
          </p>
        </div>

        {/* カテゴリフィルタ */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <a key={cat} href={cat === 'すべて' ? '/column' : `/column?cat=${cat}`} style={{
              padding: '8px 20px', borderRadius: 100,
              border: '1px solid rgba(0,0,0,0.1)',
              background: 'white', color: 'var(--text-muted)',
              fontSize: 13, textDecoration: 'none',
            }}>{cat}</a>
          ))}
        </div>

        {/* 記事グリッド */}
        {posts.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '80px 0' }}>記事がまだありません。</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {posts.map(post => (
              <a key={post.slug} href={`/column/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{
                  background: 'white', borderRadius: 12,
                  border: '1px solid rgba(0,0,0,0.08)',
                  overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  {post.thumbnail ? (
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#f4f2f1' }}>
                      <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #f4f2f1, #e8e2e2)' }} />
                  )}
                  <div style={{ padding: 24 }}>
                    {post.category && (
                      <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.15em', color: '#9a1a3c', textTransform: 'uppercase', marginBottom: 10 }}>{post.category}</p>
                    )}
                    <h2 style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.65, marginBottom: 14 }}>{post.title}</h2>
                    <time style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>
                      {post.date}
                    </time>
                  </div>
                </article>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

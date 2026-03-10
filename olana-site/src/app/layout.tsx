import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '株式会社オルアナ | ITとAIの力ですべてのビジネスを未来へ加速させる',
  description: 'アイデアの探索から市場価値を検証するMVP開発まで、15年の業務改善知見とスタートアップの実践知に基づきサポートします。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 60px',
          background: 'rgba(250,250,249,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}>
          <a href="/" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20,
            color: '#9a1a3c', textDecoration: 'none', letterSpacing: '0.05em',
          }}>OLANA</a>
          <ul style={{ display: 'flex', gap: 40, listStyle: 'none' }}>
            {[
              { href: '/#about', label: '会社概要' },
              { href: '/#services', label: '事業内容' },
              { href: '/#method', label: 'メソッド' },
              { href: '/column', label: 'コラム' },
              { href: '/info', label: 'お知らせ' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a href={href} style={{
                  color: '#7a6e6e', textDecoration: 'none',
                  fontSize: 13, letterSpacing: '0.06em',
                }}>{label}</a>
              </li>
            ))}
            <li>
              <a href="/#contact" style={{
                background: '#9a1a3c', color: 'white',
                padding: '10px 24px', borderRadius: 6,
                fontSize: 13, fontWeight: 500, textDecoration: 'none',
              }}>お問い合わせ</a>
            </li>
          </ul>
        </nav>
        {children}
        <footer style={{
          background: '#1a1414', color: 'rgba(255,255,255,0.55)',
          padding: '64px 60px 40px',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, marginBottom: 48 }}>
              <div>
                <a href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: 'white', textDecoration: 'none', display: 'block', marginBottom: 12 }}>OLANA</a>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.4)', maxWidth: 260 }}>ITとAIの力ですべてのビジネスを未来へ加速させる。株式会社オルアナ</p>
              </div>
              <div>
                <h4 style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Services</h4>
                {['AIエージェント開発', '新規事業開発', 'システム開発', 'バックオフィス支援'].map(s => (
                  <div key={s} style={{ marginBottom: 10 }}><a href="/#services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13 }}>{s}</a></div>
                ))}
              </div>
              <div>
                <h4 style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Column</h4>
                {[['AI', '/column?cat=AI'], ['新規事業開発', '/column?cat=新規事業開発'], ['バックオフィス', '/column?cat=バックオフィス業務']].map(([l, h]) => (
                  <div key={l} style={{ marginBottom: 10 }}><a href={h} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13 }}>{l}</a></div>
                ))}
              </div>
              <div>
                <h4 style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Company</h4>
                {[['会社概要', '/#about'], ['お知らせ', '/info'], ['お問い合わせ', '/#contact']].map(([l, h]) => (
                  <div key={l} style={{ marginBottom: 10 }}><a href={h} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13 }}>{l}</a></div>
                ))}
              </div>
            </div>
            <div style={{ paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>© 2025 株式会社オルアナ. All Rights Reserved.</p>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>olana.jp</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

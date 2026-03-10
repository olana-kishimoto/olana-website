import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#ccc', padding: '48px 0 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <Image
              src="/olana-logo-white.png"
              alt="OLANA"
              width={120}
              height={32}
              style={{ height: '32px', width: 'auto', marginBottom: '16px' }}
            />
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#999' }}>
              ITとAIの力ですべてのビジネスを<br />未来へ加速させる
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '13px', marginBottom: '16px', fontWeight: '600' }}>事業内容</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/business/aiagent', label: 'AIエージェント開発' },
                { href: '/business/newbusiness', label: '新規事業開発' },
                { href: '/business/systemdev', label: 'システム開発' },
                { href: '/business/backoffice', label: 'バックオフィス業務支援' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: '#999', textDecoration: 'none', fontSize: '13px' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '13px', marginBottom: '16px', fontWeight: '600' }}>企業情報</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/company', label: '会社概要' },
                { href: '/info', label: 'お知らせ' },
                { href: '/column', label: 'コラム' },
                { href: '/contact', label: 'お問い合わせ' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: '#999', textDecoration: 'none', fontSize: '13px' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>© Olana Inc. All Rights Reserved.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

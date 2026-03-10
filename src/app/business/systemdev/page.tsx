import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'システム開発 | 株式会社オルアナ',
  description: '業務課題を解決するオーダーメイドシステム。要件定義から保守まで一貫対応するシステム開発サービス。',
  openGraph: {
    title: 'システム開発 | 株式会社オルアナ',
    description: '業務課題を解決するオーダーメイドシステム。要件定義から保守まで一貫対応。',
    url: 'https://olana.jp/business/systemdev',
  },
}

const sidebarLinks = [
  { href: '/business/aiagent', label: 'AIエージェント開発' },
  { href: '/business/newbusiness', label: '新規事業開発' },
  { href: '/business/systemdev', label: 'システム開発', active: true },
  { href: '/business/backoffice', label: 'バックオフィス業務支援' },
]

const faq = [
  { q: 'どんな規模のシステムでも対応できますか？', a: '小規模なツール開発から大規模なシステム構築まで対応しています。まずはご要件をお聞かせください。' },
  { q: '開発後のサポートはありますか？', a: 'はい。保守運用契約を締結することで、バグ修正・機能追加・セキュリティアップデートを継続的に行います。' },
  { q: '既存システムとの連携は可能ですか？', a: 'APIを通じた連携や、データ移行を含む既存システムリプレイスも対応しています。' },
  { q: '開発期間はどのくらいかかりますか？', a: '規模によりますが、小規模なツールは1〜2ヶ月、中規模なシステムは3〜6ヶ月が目安です。' },
]

export default function SystemDevPage() {
  return (
    <main style={{ background: '#fafafa', paddingTop: '64px' }}>
      <div style={{ background: '#f0f0f0', padding: '12px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#888' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>トップ</Link>
            <span>/</span>
            <Link href="/business/systemdev" style={{ color: '#888', textDecoration: 'none' }}>事業内容</Link>
            <span>/</span>
            <span style={{ color: '#333' }}>システム開発</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>SYSTEM DEVELOPMENT</p>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
            システム開発
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.8' }}>
            業務課題を解決するオーダーメイドシステム。<br />
            要件定義から保守まで一貫して対応します。
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }} className="page-layout">
          <div>
            <div style={{
              background: '#fff', borderLeft: '4px solid #c0392b', padding: '28px 32px',
              borderRadius: '0 8px 8px 0', marginBottom: '48px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
            }}>
              <p style={{ color: '#333', fontSize: '15px', lineHeight: '2' }}>
                「既製品では対応できない業務がある」「紙やExcelで管理しているが限界を感じている」
                そんな企業に向けて、ゼロから業務に最適化したシステムを開発します。
                要件定義から設計・開発・テスト・導入・保守運用まで、一貫してサポートします。
              </p>
            </div>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                こんなお悩みありませんか？
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="issues-grid">
                {[
                  '既製品パッケージでは業務が合わない',
                  'Excelや紙での管理に限界を感じている',
                  '複数のシステムをまとめて一元管理したい',
                  '社内業務の自動化ツールが欲しい',
                  '自社サービスのWebアプリを開発したい',
                  '古いシステムをリニューアルしたい',
                ].map((issue, i) => (
                  <div key={i} style={{
                    background: '#fff', border: '1px solid #eee', borderRadius: '8px',
                    padding: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#c0392b', fontWeight: '900', fontSize: '16px', flexShrink: 0 }}>✓</span>
                    <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.7' }}>{issue}</p>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                開発領域
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="issues-grid">
                {[
                  { title: 'Webアプリケーション開発', desc: 'React/Next.js等を活用した高品質なWebアプリ' },
                  { title: '業務管理システム', desc: '在庫・顧客・工程管理などの業務システム' },
                  { title: 'モバイルアプリ開発', desc: 'iOS/Android対応のネイティブ・ハイブリッドアプリ' },
                  { title: 'API開発・連携', desc: '外部サービスとの連携・データ連携システム' },
                  { title: 'SaaS・プロダクト開発', desc: '自社サービスの企画から開発・運用まで' },
                  { title: 'システムリプレイス', desc: '老朽化した既存システムの刷新・移行' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '24px'
                  }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                開発フロー
              </h2>
              {[
                { step: 'STEP 1', title: '要件定義・ヒアリング', desc: '業務の流れ・課題・必要な機能を徹底的にヒアリングし、仕様書を作成します。' },
                { step: 'STEP 2', title: 'UI/UX設計・技術選定', desc: '使いやすい画面設計と、最適な技術スタックを選定します。' },
                { step: 'STEP 3', title: '開発・テスト', desc: 'アジャイル開発で進捗を共有しながら開発。テストも徹底して行います。' },
                { step: 'STEP 4', title: '導入・保守運用', desc: '導入後のトレーニング・バグ修正・機能追加まで長期的にサポートします。' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '0' }}>
                  <div style={{ width: '60px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: '#c0392b', color: '#fff', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '12px'
                    }}>
                      {i + 1}
                    </div>
                    {i < 3 && <div style={{ width: '2px', flex: 1, background: '#ddd', minHeight: '40px' }} />}
                  </div>
                  <div style={{
                    background: '#fff', border: '1px solid #eee', borderRadius: '8px',
                    padding: '20px 24px', marginBottom: '16px', flex: 1
                  }}>
                    <p style={{ color: '#c0392b', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '6px' }}>{s.step}</p>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>{s.title}</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                よくある質問
              </h2>
              {faq.map((item, i) => (
                <details key={i} style={{
                  background: '#fff', border: '1px solid #eee', borderRadius: '8px', marginBottom: '12px'
                }}>
                  <summary style={{
                    padding: '20px 24px', cursor: 'pointer', fontWeight: '700',
                    color: '#1a1a1a', fontSize: '15px', listStyle: 'none',
                    display: 'flex', alignItems: 'center', gap: '12px'
                  }}>
                    <span style={{ color: '#c0392b', fontWeight: '900' }}>Q.</span>
                    {item.q}
                  </summary>
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid #f0f0f0' }}>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', paddingTop: '16px' }}>
                      <span style={{ color: '#1a1a1a', fontWeight: '700', marginRight: '8px' }}>A.</span>
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </section>
          </div>

          <aside>
            <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '24px', position: 'sticky', top: '80px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1a1a1a', marginBottom: '16px', borderBottom: '2px solid #c0392b', paddingBottom: '10px' }}>
                サービス一覧
              </h3>
              {sidebarLinks.map(l => (
                <Link key={l.href} href={l.href} style={{
                  display: 'block', padding: '12px', borderRadius: '6px', textDecoration: 'none', marginBottom: '4px',
                  background: l.active ? '#fdf5f5' : 'transparent',
                  color: l.active ? '#c0392b' : '#555',
                  fontWeight: l.active ? '700' : '400', fontSize: '13px',
                  borderLeft: l.active ? '3px solid #c0392b' : '3px solid transparent',
                }}>
                  {l.label}
                </Link>
              ))}
              <div style={{ marginTop: '24px', background: '#c0392b', borderRadius: '8px', padding: '20px' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '8px' }}>まずはお気軽に</p>
                <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: '800', marginBottom: '12px', lineHeight: '1.5' }}>無料相談を<br />受け付けています</h4>
                <Link href="/contact" style={{
                  display: 'block', background: '#fff', color: '#c0392b',
                  padding: '10px', borderRadius: '4px', textDecoration: 'none',
                  textAlign: 'center', fontWeight: '700', fontSize: '13px'
                }}>
                  お問い合わせ →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .page-layout { grid-template-columns: 1fr 300px; }
        .issues-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) { .page-layout { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .issues-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  )
}

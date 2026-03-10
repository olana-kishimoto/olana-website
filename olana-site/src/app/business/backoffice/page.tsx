import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'バックオフィス業務支援 | 株式会社オルアナ',
  description: '経理・労務・総務などの間接業務をまるごと支援。本業への集中を実現するバックオフィス業務支援サービス。',
  openGraph: {
    title: 'バックオフィス業務支援 | 株式会社オルアナ',
    description: '経理・労務・総務などの間接業務をまるごと支援。本業への集中を実現。',
    url: 'https://olana.jp/business/backoffice',
  },
}

const sidebarLinks = [
  { href: '/business/aiagent', label: 'AIエージェント開発' },
  { href: '/business/newbusiness', label: '新規事業開発' },
  { href: '/business/systemdev', label: 'システム開発' },
  { href: '/business/backoffice', label: 'バックオフィス業務支援', active: true },
]

const faq = [
  { q: 'どんな業務を依頼できますか？', a: '経理・労務・人事・総務・法務対応など幅広く対応しています。まずはご相談ください。' },
  { q: '一部の業務だけ依頼することはできますか？', a: 'はい、単発・スポットでのご依頼も承っています。必要な業務だけをフレキシブルにご利用いただけます。' },
  { q: '機密情報の取り扱いは安全ですか？', a: '守秘義務契約（NDA）を締結のうえ、厳格な情報管理体制で業務を行います。' },
  { q: '料金体系はどうなっていますか？', a: '業務内容・ボリュームによって異なります。まずは無料相談でお見積りいたします。' },
]

export default function BackofficePage() {
  return (
    <main style={{ background: '#fafafa', paddingTop: '64px' }}>
      <div style={{ background: '#f0f0f0', padding: '12px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#888' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>トップ</Link>
            <span>/</span>
            <Link href="/business/backoffice" style={{ color: '#888', textDecoration: 'none' }}>事業内容</Link>
            <span>/</span>
            <span style={{ color: '#333' }}>バックオフィス業務支援</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>BACK OFFICE SUPPORT</p>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
            バックオフィス業務支援
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.8' }}>
            経理・労務・総務などの間接業務をまるごと支援。<br />
            本業への集中を実現します。
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
                スタートアップや中小企業では、経理・労務・総務などのバックオフィス業務を
                少人数で対応しているケースが多く、本来の事業に集中できないことが課題になりがちです。
                オルアナは、これらの間接業務を専門チームがまるごと支援することで、
                経営者・従業員が本業に集中できる環境を実現します。
              </p>
            </div>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                こんなお悩みありませんか？
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="issues-grid">
                {[
                  '経理・労務が社長や少数メンバーに集中している',
                  'バックオフィス業務のために採用コストをかけたくない',
                  '経理処理・給与計算にミスが多い',
                  '法改正への対応が追いついていない',
                  '上場準備・資金調達に向けた内部体制を整えたい',
                  '急成長に組織体制が追いついていない',
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
                サービス内容
              </h2>
              {[
                {
                  title: '経理・財務支援',
                  items: ['日々の記帳・仕訳', '月次決算・年次決算補助', '請求書・領収書管理', '税理士・会計士との連携窓口'],
                },
                {
                  title: '労務・人事支援',
                  items: ['給与計算・社会保険手続き', '入退社手続き・各種届出', '就業規則の整備・見直し', '勤怠管理システムの整備'],
                },
                {
                  title: '総務・コーポレート支援',
                  items: ['各種契約書管理・チェック', '備品・オフィス管理', '社内規程の整備', 'IPO・資金調達に向けた体制構築'],
                },
              ].map((svc, i) => (
                <div key={i} style={{
                  background: '#fff', border: '1px solid #eee', borderRadius: '8px',
                  padding: '28px', marginBottom: '16px'
                }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#1a1a1a', marginBottom: '16px', borderBottom: '2px solid #c0392b', paddingBottom: '10px', display: 'inline-block' }}>{svc.title}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {svc.items.map((item, j) => (
                      <li key={j} style={{ color: '#444', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ color: '#c0392b', fontWeight: '700' }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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

            {/* 資料DL */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
              borderRadius: '12px', padding: '36px', marginBottom: '48px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px' }}>FREE DOWNLOAD</p>
                  <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '900', marginBottom: '8px' }}>
                    経理AI（経理愛）ガイドブック
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.7' }}>
                    バックオフィス業務をAIで効率化する方法を<br />まとめた資料（無料）
                  </p>
                </div>
                <a href="/downloads/keiriai_guidebook.pdf" download style={{
                  background: '#c0392b', color: '#fff', padding: '14px 28px',
                  borderRadius: '4px', textDecoration: 'none',
                  fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0
                }}>
                  ダウンロード（無料）→
                </a>
              </div>
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

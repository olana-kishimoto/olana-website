import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '新規事業開発 | 株式会社オルアナ',
  description: 'アイデアの具現化から事業化まで。オルアナが新規事業立ち上げをゼロから伴走します。',
  openGraph: {
    title: '新規事業開発 | 株式会社オルアナ',
    description: 'アイデアの具現化から事業化まで。経験豊富なチームがゼロから伴走。',
    url: 'https://olana.jp/business/newbusiness',
  },
}

const sidebarLinks = [
  { href: '/business/aiagent', label: 'AIエージェント開発' },
  { href: '/business/newbusiness', label: '新規事業開発', active: true },
  { href: '/business/systemdev', label: 'システム開発' },
  { href: '/business/backoffice', label: 'バックオフィス業務支援' },
]

const faq = [
  {
    q: 'どんな段階から相談できますか？',
    a: 'アイデアがぼんやりしている段階でも大丈夫です。「こういう課題があるが何かできないか」というレベルからご相談ください。',
  },
  {
    q: '資金調達のサポートもしてもらえますか？',
    a: '事業計画書の作成・ピッチ資料制作のサポートは行っています。VCや補助金に関する情報提供も可能です（あっせんは行っていません）。',
  },
  {
    q: '開発（エンジニアリング）も対応できますか？',
    a: 'はい。企画から実装まで一貫して対応できます。必要に応じてシステム開発チームと連携します。',
  },
  {
    q: '既存事業の新機能開発も相談できますか？',
    a: '既存事業の成長施策・新機能追加・周辺事業の立ち上げなど、幅広くご相談いただけます。',
  },
]

export default function NewBusinessPage() {
  return (
    <main style={{ background: '#fafafa', paddingTop: '64px' }}>
      <div style={{ background: '#f0f0f0', padding: '12px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#888' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>トップ</Link>
            <span>/</span>
            <Link href="/business/newbusiness" style={{ color: '#888', textDecoration: 'none' }}>事業内容</Link>
            <span>/</span>
            <span style={{ color: '#333' }}>新規事業開発</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>NEW BUSINESS DEVELOPMENT</p>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
            新規事業開発
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.8' }}>
            アイデアの具現化から事業化まで、<br />
            経験豊富なチームがゼロから伴走します。
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }} className="page-layout">
          <div>
            <div style={{
              background: '#fff', borderLeft: '4px solid #c0392b', padding: '28px 32px',
              borderRadius: '0 8px 8px 0', marginBottom: '48px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
            }}>
              <p style={{ color: '#333', fontSize: '15px', lineHeight: '2' }}>
                「やりたいことはあるが、どこから手を付けていいかわからない」
                「アイデアはあるが、実行に移せていない」
                そんな企業・経営者の方に向けて、オルアナは新規事業立ち上げを一貫してサポートします。
                市場調査から事業計画策定、プロトタイプ開発、マーケティングまで、
                事業化に必要なすべてのプロセスに伴走します。
              </p>
            </div>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                こんなお悩みありませんか？
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="issues-grid">
                {[
                  'やりたいことはあるが、具体的な進め方がわからない',
                  '社内にリソースがなく、新規事業に着手できていない',
                  '過去に挑戦したが、うまくいかなかった',
                  '競合との差別化ポイントが見えない',
                  '市場調査や検証を誰に頼めばいいかわからない',
                  'スピード感を持って立ち上げたいが、体制が整っていない',
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
                選ばれる3つの理由
              </h2>
              {[
                { num: '01', title: '事業×技術×マーケの総合力', desc: '経営戦略・システム開発・マーケティングを社内で一貫して担えるため、バラバラに外注する手間やコストを削減できます。' },
                { num: '02', title: 'スタートアップ的スピード感', desc: '大手コンサルのような重厚なプロセスではなく、実際に手を動かしながら素早く仮説検証を繰り返します。' },
                { num: '03', title: '伴走型の実行支援', desc: '計画を作って終わりではなく、実際の事業推進まで一緒に取り組みます。壁にぶつかった時こそ、真の価値を発揮します。' },
              ].map((v, i) => (
                <div key={i} style={{
                  background: '#fff', border: '1px solid #eee', borderRadius: '8px',
                  padding: '24px 28px', marginBottom: '16px', display: 'flex', gap: '20px'
                }}>
                  <span style={{
                    background: '#c0392b', color: '#fff', fontWeight: '900', fontSize: '14px',
                    width: '40px', height: '40px', borderRadius: '50%', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>{v.num}</span>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>{v.title}</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8' }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                支援フロー
              </h2>
              {[
                { step: 'STEP 1', title: 'アイデア整理・仮説立案', desc: '漠然としたアイデアを言語化し、課題・ターゲット・提供価値を整理します。' },
                { step: 'STEP 2', title: '市場調査・競合分析', desc: '市場規模・競合・顧客ニーズを調査し、事業の実現可能性を検証します。' },
                { step: 'STEP 3', title: '事業計画策定・プロトタイプ開発', desc: '事業計画書を作成し、MVP（最小限のプロダクト）を素早く開発します。' },
                { step: 'STEP 4', title: '市場検証・グロース支援', desc: '実際にローンチし、データを見ながら改善・拡大を繰り返します。' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '0', position: 'relative' }}>
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
                  background: '#fff', border: '1px solid #eee', borderRadius: '8px',
                  marginBottom: '12px'
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
                    新規事業開発ガイドブック
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.7' }}>
                    新規事業立ち上げの進め方・成功事例を<br />まとめた資料（無料）
                  </p>
                </div>
                <a href="/downloads/newbusiness_guidebook.pdf" download style={{
                  background: '#c0392b', color: '#fff', padding: '14px 28px',
                  borderRadius: '4px', textDecoration: 'none',
                  fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0
                }}>
                  ダウンロード（無料）→
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div style={{
              background: '#fff', border: '1px solid #eee', borderRadius: '12px',
              padding: '24px', position: 'sticky', top: '80px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1a1a1a', marginBottom: '16px', borderBottom: '2px solid #c0392b', paddingBottom: '10px' }}>
                サービス一覧
              </h3>
              {sidebarLinks.map(l => (
                <Link key={l.href} href={l.href} style={{
                  display: 'block', padding: '12px', borderRadius: '6px', textDecoration: 'none',
                  marginBottom: '4px',
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
                <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: '800', marginBottom: '12px', lineHeight: '1.5' }}>
                  無料相談を<br />受け付けています
                </h4>
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
        @media (max-width: 900px) {
          .page-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .issues-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

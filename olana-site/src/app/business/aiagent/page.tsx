import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AIエージェント開発 | 株式会社オルアナ',
  description: '業務フロー全体をAIが自律的に処理。人手不足・属人化・反復作業の課題を根本解決するAIエージェント開発サービス。',
  openGraph: {
    title: 'AIエージェント開発 | 株式会社オルアナ',
    description: '業務フロー全体をAIが自律的に処理。人手不足・属人化・反復作業の課題を根本解決。',
    url: 'https://olana.jp/business/aiagent',
  },
}

const faq = [
  {
    q: 'AIエージェントとは何ですか？',
    a: 'AIエージェントとは、指示を受けて自律的にタスクを実行するAIシステムです。単なる質問応答にとどまらず、複数のステップを経て業務を遂行します。',
  },
  {
    q: '導入にどのくらいの期間がかかりますか？',
    a: '課題の複雑さによりますが、最短2〜4週間でパイロット導入が可能です。その後、本番移行まで通常1〜3ヶ月を目安にしています。',
  },
  {
    q: '小規模な会社でも導入できますか？',
    a: 'はい、規模は問いません。むしろ人手不足を抱える中小企業こそ、大きな効果を得られるケースが多いです。',
  },
  {
    q: 'セキュリティは大丈夫ですか？',
    a: '企業の機密データを扱う場合は、オンプレミスやプライベートクラウドでの構築も対応しています。セキュリティポリシーに合わせて設計します。',
  },
]

const sidebarLinks = [
  { href: '/business/aiagent', label: 'AIエージェント開発', active: true },
  { href: '/business/newbusiness', label: '新規事業開発' },
  { href: '/business/systemdev', label: 'システム開発' },
  { href: '/business/backoffice', label: 'バックオフィス業務支援' },
]

export default function AiAgentPage() {
  return (
    <main style={{ background: '#fafafa', paddingTop: '64px' }}>
      {/* パンくず */}
      <div style={{ background: '#f0f0f0', padding: '12px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#888' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>トップ</Link>
            <span>/</span>
            <Link href="/business/aiagent" style={{ color: '#888', textDecoration: 'none' }}>事業内容</Link>
            <span>/</span>
            <span style={{ color: '#333' }}>AIエージェント開発</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>AI AGENT DEVELOPMENT</p>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
            AIエージェント開発
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.8' }}>
            業務フロー全体をAIが自律的に処理。<br />
            人手不足・属人化・反復作業の課題を根本解決します。
          </p>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }} className="page-layout">

          {/* Main Content */}
          <div>
            {/* リード文 */}
            <div style={{
              background: '#fff', borderLeft: '4px solid #c0392b', padding: '28px 32px',
              borderRadius: '0 8px 8px 0', marginBottom: '48px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
            }}>
              <p style={{ color: '#333', fontSize: '15px', lineHeight: '2' }}>
                AIエージェントは、複数のタスクを自律的に判断・実行するAIシステムです。
                単なる「AIチャット」ではなく、業務プロセス全体をAIが担うことで、
                人手不足や属人化の問題を根本から解決します。
                オルアナでは、貴社の業務フローを徹底的に分析し、
                最適なAIエージェントを設計・開発・導入まで一貫してサポートします。
              </p>
            </div>

            {/* よくある課題 */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                こんなお悩みありませんか？
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="issues-grid">
                {[
                  '同じ作業を毎日繰り返していて非効率',
                  '社員が単純作業に追われて本来の仕事ができない',
                  '特定の人しかできない業務があって属人化している',
                  '24時間対応が必要だが人員が不足している',
                  'データ収集・整理・分析に時間がかかりすぎる',
                  'カスタマー対応のレスポンスが遅い',
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

            {/* 提供価値 */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                オルアナが提供する価値
              </h2>
              {[
                { num: '01', title: '業務効率化・コスト削減', desc: '繰り返し作業をAIが自動処理することで、人件費を削減しながら処理速度を10倍以上に改善した事例もあります。' },
                { num: '02', title: '24時間365日の自動対応', desc: '休まず稼働するAIエージェントが、深夜・休日も含めたあらゆる問い合わせや処理に対応します。' },
                { num: '03', title: '属人化の解消', desc: 'AIがナレッジを蓄積・管理することで、特定の人に依存しない組織づくりを実現します。' },
                { num: '04', title: '既存システムとのシームレスな連携', desc: 'SlackやNotionなど使い慣れたツールと連携し、現場のオペレーションを変えることなく導入できます。' },
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

            {/* 開発フロー */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                開発フロー
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { step: 'STEP 1', title: 'ヒアリング・業務分析', desc: '現状の業務フロー・課題・ゴールを徹底的にヒアリングします。' },
                  { step: 'STEP 2', title: '要件定義・設計', desc: 'AIエージェントの仕様・連携ツール・セキュリティ要件を定義します。' },
                  { step: 'STEP 3', title: '開発・テスト', desc: 'アジャイル開発で迅速に試作し、フィードバックを取り込みながら完成度を高めます。' },
                  { step: 'STEP 4', title: '導入・定着支援', desc: '現場への展開・トレーニング・運用定着まで伴走します。' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0', position: 'relative' }}>
                    <div style={{
                      width: '60px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}>
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
              </div>
            </section>

            {/* FAQ */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #eee', paddingBottom: '12px' }}>
                よくある質問
              </h2>
              {faq.map((item, i) => (
                <details key={i} style={{
                  background: '#fff', border: '1px solid #eee', borderRadius: '8px',
                  marginBottom: '12px', overflow: 'hidden'
                }}>
                  <summary style={{
                    padding: '20px 24px', cursor: 'pointer', fontWeight: '700',
                    color: '#1a1a1a', fontSize: '15px', listStyle: 'none',
                    display: 'flex', alignItems: 'center', gap: '12px'
                  }}>
                    <span style={{ color: '#c0392b', fontWeight: '900' }}>Q.</span>
                    {item.q}
                  </summary>
                  <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid #f0f0f0' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }} className="dl-inner">
                <div>
                  <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px' }}>FREE DOWNLOAD</p>
                  <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '900', marginBottom: '8px' }}>
                    AIエージェント導入ガイドブック
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.7' }}>
                    AIエージェントの基礎から活用事例まで<br />わかりやすくまとめた資料（無料）
                  </p>
                </div>
                <button
                  id="dl-btn-aiagent"
                  style={{
                    background: '#c0392b', color: '#fff', padding: '14px 28px',
                    borderRadius: '4px', border: 'none', cursor: 'pointer',
                    fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0
                  }}
                  onClick={() => {
                    const modal = document.getElementById('dl-modal-aiagent')
                    if (modal) modal.style.display = 'flex'
                  }}
                >
                  ダウンロード（無料）→
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div style={{
              background: '#fff', border: '1px solid #eee', borderRadius: '12px',
              padding: '24px', marginBottom: '24px', position: 'sticky', top: '80px'
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

      {/* DL Modal */}
      <div id="dl-modal-aiagent" style={{
        display: 'none', position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
        zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '24px'
      }}>
        <div style={{
          background: '#fff', borderRadius: '16px', padding: '40px',
          maxWidth: '480px', width: '100%', position: 'relative'
        }}>
          <button
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#999'
            }}
            onClick={() => {
              const modal = document.getElementById('dl-modal-aiagent')
              if (modal) modal.style.display = 'none'
            }}
          >
            ✕
          </button>
          <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1a1a1a', marginBottom: '8px' }}>
            資料ダウンロード
          </h3>
          <p style={{ color: '#888', fontSize: '13px', marginBottom: '28px' }}>
            AIエージェント導入ガイドブック
          </p>
          <form onSubmit={async (e) => {
            e.preventDefault()
            const form = e.target as HTMLFormElement
            const data = {
              company: (form.elements.namedItem('company') as HTMLInputElement)?.value,
              name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
              email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
              document: 'ai_guidebook',
            }
            const res = await fetch('/api/download', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })
            const result = await res.json()
            if (result.url) {
              window.open(result.url, '_blank')
              const modal = document.getElementById('dl-modal-aiagent')
              if (modal) modal.style.display = 'none'
            }
          }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                会社名 <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <input name="company" required style={{
                width: '100%', padding: '12px', border: '1px solid #ddd',
                borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box'
              }} placeholder="株式会社〇〇" />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                お名前 <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <input name="name" required style={{
                width: '100%', padding: '12px', border: '1px solid #ddd',
                borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box'
              }} placeholder="山田 太郎" />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                メールアドレス <span style={{ color: '#c0392b' }}>*</span>
              </label>
              <input name="email" type="email" required style={{
                width: '100%', padding: '12px', border: '1px solid #ddd',
                borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box'
              }} placeholder="info@example.com" />
            </div>
            <button type="submit" style={{
              width: '100%', background: '#c0392b', color: '#fff', padding: '14px',
              border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '15px', cursor: 'pointer'
            }}>
              ダウンロードする
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .page-layout { grid-template-columns: 1fr 300px; }
        .issues-grid { grid-template-columns: 1fr 1fr; }
        .dl-inner { flex-direction: row; }
        @media (max-width: 900px) {
          .page-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .issues-grid { grid-template-columns: 1fr !important; }
          .dl-inner { flex-direction: column !important; }
        }
      `}</style>
    </main>
  )
}

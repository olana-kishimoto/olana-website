import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '株式会社オルアナ | ITとAIの力ですべてのビジネスを未来へ加速させる',
  description: '株式会社オルアナは、AIエージェント開発・新規事業開発・システム開発・バックオフィス業務支援を通じ、ITとAIの力ですべてのビジネスを未来へ加速させます。',
  openGraph: {
    title: '株式会社オルアナ | ITとAIの力ですべてのビジネスを未来へ加速させる',
    description: 'AIエージェント開発・新規事業開発・システム開発・バックオフィス業務支援',
    url: 'https://olana.jp',
    siteName: '株式会社オルアナ',
    locale: 'ja_JP',
    type: 'website',
  },
}

const services = [
  {
    href: '/business/aiagent',
    title: 'AIエージェント開発',
    desc: '業務フロー全体をAIが自律的に処理。人手不足・属人化・反復作業の課題を根本解決します。',
    icon: '🤖',
  },
  {
    href: '/business/newbusiness',
    title: '新規事業開発',
    desc: 'アイデアの具現化から事業化まで、経験豊富なチームがゼロから伴走します。',
    icon: '🚀',
  },
  {
    href: '/business/systemdev',
    title: 'システム開発',
    desc: '業務課題を解決するオーダーメイドシステム。要件定義から保守まで一貫対応。',
    icon: '💻',
  },
  {
    href: '/business/backoffice',
    title: 'バックオフィス業務支援',
    desc: '経理・労務・総務などの間接業務をまるごと支援。本業への集中を実現します。',
    icon: '📊',
  },
]

const methodPhases = [
  {
    num: 'Phase 01',
    title: '現状分析・課題整理',
    desc: 'ヒアリングと現場調査で、真の課題と改善余地を可視化します。',
  },
  {
    num: 'Phase 02',
    title: '戦略立案・ソリューション設計',
    desc: '課題に最適な手法を選定し、実行可能なロードマップを策定します。',
  },
  {
    num: 'Phase 03',
    title: '実装・定着支援',
    desc: '導入後の定着まで一貫してサポート。成果が出るまで伴走します。',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #fff 0%, #fdf5f5 60%, #fff 100%)',
        paddingTop: '64px',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', padding: '80px 24px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'
        }} className="hero-grid">
          <div>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '16px' }}>
              ITとAIの力で未来へ加速
            </p>
            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '900', lineHeight: '1.2',
              color: '#1a1a1a', marginBottom: '24px'
            }}>
              すべてのビジネスを、<br />
              <span style={{ color: '#c0392b' }}>AIの力</span>で<br />
              加速させる。
            </h1>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.9', marginBottom: '40px' }}>
              オルアナは、AIエージェント開発・新規事業開発・システム開発・バックオフィス支援を通じ、
              あらゆる企業の成長を支援します。
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: '#c0392b', color: '#fff', padding: '16px 36px',
                borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '15px',
                transition: 'background 0.2s'
              }}>
                無料相談を予約する →
              </Link>
              <Link href="/business/aiagent" style={{
                background: '#fff', color: '#c0392b', padding: '16px 36px',
                borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '15px',
                border: '2px solid #c0392b'
              }}>
                サービスを見る
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <Image
              src="/images/hero.png"
              alt="オルアナのサービスイメージ"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>SERVICES</p>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#1a1a1a' }}>事業内容</h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px'
          }} className="service-grid">
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '2px solid #f0f0f0', borderRadius: '12px',
                  padding: '36px', transition: 'all 0.2s', cursor: 'pointer'
                }} className="service-card">
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.8' }}>{s.desc}</p>
                  <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', marginTop: '20px' }}>詳しく見る →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: '#fafafa', padding: '100px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'
          }} className="about-grid">
            <div>
              <Image
                src="/images/about.png"
                alt="オルアナについて"
                width={520}
                height={380}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </div>
            <div>
              <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>ABOUT</p>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#1a1a1a', marginBottom: '24px', lineHeight: '1.4' }}>
                ビジネスの課題を、<br />テクノロジーで解決する
              </h2>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '2', marginBottom: '32px' }}>
                株式会社オルアナは、AIとITを活用してビジネスの成長を支援する会社です。
                単なるツール提供ではなく、お客様のビジネス課題を深く理解し、
                本質的な解決策を提供することにこだわっています。
              </p>
              <Link href="/company" style={{
                color: '#c0392b', fontWeight: '700', textDecoration: 'none', fontSize: '15px'
              }}>
                会社概要を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Olana Method */}
      <section style={{ background: '#c0392b', padding: '100px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>HOW WE WORK</p>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>オルアナメソッド</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.9' }}>
              課題の本質を掴み、最短経路で成果へ。<br />
              私たちの3ステップアプローチがビジネスを変えます。
            </p>
          </div>
          <div style={{ margin: '48px 0' }}>
            <Image
              src="/images/method.png"
              alt="オルアナメソッド"
              width={1000}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}
            />
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
          }} className="method-grid">
            {methodPhases.map((p, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.12)', borderRadius: '12px',
                padding: '32px', color: '#fff'
              }}>
                <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', marginBottom: '12px', opacity: 0.7 }}>{p.num}</p>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.8', opacity: 0.85 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Column */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>COLUMN</p>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#1a1a1a' }}>コラム</h2>
            </div>
            <Link href="/column" style={{ color: '#c0392b', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>
              すべて見る →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="column-grid">
            {[
              { img: '/images/col1.png', label: 'AIエージェント', title: '2025年注目のAIエージェントトレンド', href: '/column/ai-agent-trends-2025' },
              { img: '/images/col2.png', label: '新規事業', title: 'AIを活用した新規事業の立ち上げ方', href: '/column' },
              { img: '/images/col3.png', label: 'DX推進', title: '中小企業のDX推進で失敗しないための5つのポイント', href: '/column' },
            ].map((col, i) => (
              <Link key={i} href={col.href} style={{ textDecoration: 'none' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#fff', border: '1px solid #eee', transition: 'transform 0.2s' }} className="col-card">
                  <Image
                    src={col.img}
                    alt={col.title}
                    width={360}
                    height={220}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '20px' }}>
                    <span style={{
                      background: '#fdf5f5', color: '#c0392b', fontSize: '11px',
                      fontWeight: '700', padding: '4px 10px', borderRadius: '20px', marginBottom: '10px', display: 'inline-block'
                    }}>
                      {col.label}
                    </span>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.6' }}>{col.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1a1a1a', padding: '100px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '20px', lineHeight: '1.4' }}>
            まずはお気軽に<br />ご相談ください
          </h2>
          <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.9', marginBottom: '48px' }}>
            情報収集段階でも大歓迎です。<br />
            貴社の課題をお聞かせいただくだけでも構いません。
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#c0392b', color: '#fff', padding: '18px 48px',
              borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '16px'
            }}>
              無料相談を予約する →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-grid, .about-grid { grid-template-columns: 1fr 1fr; }
        .service-grid { grid-template-columns: repeat(2, 1fr); }
        .method-grid { grid-template-columns: repeat(3, 1fr); }
        .column-grid { grid-template-columns: repeat(3, 1fr); }
        .service-card:hover { border-color: #c0392b; transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .col-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        @media (max-width: 768px) {
          .hero-grid, .about-grid { grid-template-columns: 1fr !important; }
          .service-grid { grid-template-columns: 1fr !important; }
          .method-grid { grid-template-columns: 1fr !important; }
          .column-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

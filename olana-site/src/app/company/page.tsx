import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社概要 | 株式会社オルアナ',
  description: '株式会社オルアナの会社概要ページ。経営理念・MISSION・VISION・VALUE、代表挨拶、会社情報、メンバー紹介をご覧いただけます。',
  openGraph: {
    title: '会社概要 | 株式会社オルアナ',
    description: '株式会社オルアナの会社概要。ITとAIの力ですべてのビジネスを未来へ加速させる。',
    url: 'https://olana.jp/company',
  },
}

const members = [
  {
    name: '岸本 拓也',
    role: '代表取締役社長',
    bio: 'システム開発・AI活用・新規事業立ち上げを専門とし、多くの企業のDX推進を支援。「テクノロジーですべての人の可能性を広げる」という信念のもと、オルアナを創業。',
    img: 'https://olana.jp/wp-content/uploads/2024/09/岸本プロフィール_edited.jpg',
    twitter: 'https://twitter.com/olana_takuya',
    instagram: 'https://www.instagram.com/takuya_kishimoto_olana/',
    facebook: 'https://www.facebook.com/takuya.kishimoto.58',
  },
  {
    name: '大橋 汐里',
    role: '代表取締役専務',
    bio: 'バックオフィス業務全般と広報・マーケティングを担当。「すべての人が自分らしく働ける環境をつくる」をミッションに、組織づくりと業務効率化を推進。',
    img: 'https://olana.jp/wp-content/uploads/2024/09/大橋プロフィール_edited.jpg',
    twitter: 'https://twitter.com/olana_shiori',
    instagram: 'https://www.instagram.com/shiori_ohashi_olana/',
    facebook: 'https://www.facebook.com/shiori.ohashi.olana',
  },
]

const companyInfo = [
  { label: '社名', value: '株式会社オルアナ' },
  { label: '設立', value: '2024年7月' },
  { label: '所在地', value: '〒541-0042 大阪府大阪市中央区今橋4-4-7' },
  { label: '代表者', value: '岸本 拓也' },
  { label: '事業内容', value: 'AIエージェント開発・新規事業開発・システム開発・バックオフィス業務支援' },
  { label: 'メール', value: 'info@olana.jp' },
]

const strengths = [
  {
    num: '01',
    title: '技術力と事業理解の両立',
    desc: '技術だけでなく、ビジネスの文脈を深く理解したうえで最適な解決策を提案します。',
  },
  {
    num: '02',
    title: 'スピード感ある実行力',
    desc: '意思決定が早く、アジャイルに動くことで、お客様の事業スピードに合わせた支援を実現します。',
  },
  {
    num: '03',
    title: '伴走型サポート',
    desc: '導入して終わりではなく、定着・成果が出るまで一緒に走り続けます。',
  },
]

export default function CompanyPage() {
  return (
    <main>
      {/* パンくず */}
      <div style={{ background: '#f8f8f8', padding: '12px 0', marginTop: '64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#888' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>トップ</Link>
            <span>/</span>
            <span style={{ color: '#333' }}>会社概要</span>
          </div>
        </div>
      </div>

      {/* Mission Hero */}
      <section style={{ background: '#c0392b', padding: '80px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '700', fontSize: '13px', letterSpacing: '3px', marginBottom: '20px' }}>COMPANY PHILOSOPHY</p>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: '900', color: '#fff', lineHeight: '1.4', marginBottom: '24px' }}>
            ITとAIの力で<br />すべてのビジネスを未来へ加速させる
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '2' }}>
            私たちは、テクノロジーの力を活用して、すべての企業・個人の可能性を広げることをミッションとしています。
          </p>
        </div>
      </section>

      {/* Mission / Vision / Value */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="mvv-grid">
            {[
              { label: 'MISSION', title: 'ITとAIの力ですべてのビジネスを未来へ加速させる', color: '#c0392b' },
              { label: 'VISION', title: 'テクノロジーで、すべての人の可能性を解き放つ', color: '#1a1a1a' },
              { label: 'VALUE', title: '誠実・挑戦・共創・スピード', color: '#1a1a1a' },
            ].map((item, i) => (
              <div key={i} style={{
                border: `2px solid ${i === 0 ? '#c0392b' : '#eee'}`,
                borderRadius: '12px', padding: '36px',
                background: i === 0 ? '#fdf5f5' : '#fff'
              }}>
                <p style={{ color: item.color, fontWeight: '800', fontSize: '13px', letterSpacing: '2px', marginBottom: '16px' }}>{item.label}</p>
                <p style={{ color: '#1a1a1a', fontSize: '16px', fontWeight: '700', lineHeight: '1.7' }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>MESSAGE</p>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#1a1a1a' }}>代表挨拶</h2>
          </div>
          <div style={{
            background: '#fff', borderRadius: '12px', padding: '48px',
            borderLeft: '4px solid #c0392b', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
          }}>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '2.1', marginBottom: '24px' }}>
              私たちオルアナは、「ITとAIの力ですべてのビジネスを未来へ加速させる」というミッションのもと、
              2024年に設立しました。
            </p>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '2.1', marginBottom: '24px' }}>
              現代のビジネス環境は、テクノロジーの急速な進化によって大きく変化しています。
              しかし、多くの企業がその波に乗り切れず、競争力を失いつつあります。
              私たちはそのような企業に寄り添い、テクノロジーを活用した具体的な解決策を提供します。
            </p>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '2.1', marginBottom: '32px' }}>
              単なるシステム開発や業務効率化にとどまらず、お客様のビジネスの本質的な課題を解決し、
              持続的な成長を支援することが私たちの使命です。
            </p>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '16px' }}>代表取締役社長 岸本 拓也</p>
            </div>
          </div>
        </div>
      </section>

      {/* メンバー */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>MEMBERS</p>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#1a1a1a' }}>メンバー紹介</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="member-grid">
            {members.map((m, i) => (
              <div key={i} style={{
                border: '2px solid #eee', borderRadius: '12px', padding: '36px',
                display: 'flex', gap: '24px', alignItems: 'flex-start'
              }}>
                <Image
                  src={m.img}
                  alt={m.name}
                  width={80}
                  height={80}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <p style={{ color: '#c0392b', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>{m.role}</p>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>{m.name}</h3>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>{m.bio}</p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {m.twitter && <a href={m.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '12px', textDecoration: 'none' }}>X (Twitter)</a>}
                    {m.instagram && <a href={m.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '12px', textDecoration: 'none' }}>Instagram</a>}
                    {m.facebook && <a href={m.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '12px', textDecoration: 'none' }}>Facebook</a>}
                  </div>
                </div>
              </div>
            ))}
            {/* 採用 */}
            <div style={{
              border: '2px dashed #ddd', borderRadius: '12px', padding: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
            }}>
              <div>
                <p style={{ fontSize: '32px', marginBottom: '12px' }}>🤝</p>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>仲間を募集中</h3>
                <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.8' }}>一緒にビジネスを変える<br />仲間を探しています</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>STRENGTHS</p>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#1a1a1a' }}>私たちの強み</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="strength-grid">
            {strengths.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '32px', borderTop: '4px solid #c0392b' }}>
                <p style={{ fontSize: '36px', fontWeight: '900', color: '#f0d5d3', marginBottom: '8px' }}>{s.num}</p>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.8' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>COMPANY INFO</p>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#1a1a1a' }}>会社情報</h2>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {companyInfo.map((item, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{
                    padding: '20px 24px', textAlign: 'left', fontWeight: '700',
                    color: '#555', fontSize: '14px', width: '160px', background: '#fafafa'
                  }}>
                    {item.label}
                  </th>
                  <td style={{ padding: '20px 24px', color: '#333', fontSize: '14px', lineHeight: '1.7' }}>
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* アクセス */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>ACCESS</p>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#1a1a1a' }}>アクセス</h2>
          </div>
          <div style={{
            borderRadius: '12px', overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6987506388!2d135.5015879!3d34.6875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e773cbafd795%3A0x123456!2z5aSn5qCq5byP5Lya56S-5aSp5qiY!5e0!3m2!1sja!2sjp!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社オルアナ所在地"
            />
          </div>
          <p style={{ textAlign: 'center', color: '#888', fontSize: '13px', marginTop: '16px' }}>
            〒541-0042 大阪府大阪市中央区今橋4-4-7
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#c0392b', padding: '80px 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>まずはお気軽にご相談ください</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.9', marginBottom: '40px' }}>
            情報収集段階でも大歓迎です。
          </p>
          <Link href="/contact" style={{
            background: '#fff', color: '#c0392b', padding: '16px 48px',
            borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '16px'
          }}>
            お問い合わせはこちら →
          </Link>
        </div>
      </section>

      <style>{`
        .mvv-grid { grid-template-columns: repeat(3, 1fr); }
        .member-grid { grid-template-columns: repeat(2, 1fr); }
        .strength-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 768px) {
          .mvv-grid, .member-grid, .strength-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [referral, setReferral] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target as HTMLFormElement
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value,
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      referral: referral,
      referralName: (form.elements.namedItem('referralName') as HTMLInputElement)?.value || '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
    }

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
      // フォールバック
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main style={{ background: '#fafafa', paddingTop: '64px' }}>
      <div style={{ background: '#f0f0f0', padding: '12px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#888' }}>
            <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>トップ</Link>
            <span>/</span>
            <span style={{ color: '#333' }}>お問い合わせ</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#c0392b', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>CONTACT</p>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
            お問い合わせ
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.8' }}>
            情報収集段階でも大歓迎です。<br />
            お気軽にご相談ください。
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px' }} className="contact-layout">

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '48px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
                <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#1a1a1a', marginBottom: '16px' }}>
                  お問い合わせを受け付けました
                </h2>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.9', marginBottom: '32px' }}>
                  担当者より2営業日以内にご連絡いたします。<br />
                  しばらくお待ちください。
                </p>
                <Link href="/" style={{
                  background: '#c0392b', color: '#fff', padding: '14px 36px',
                  borderRadius: '4px', textDecoration: 'none', fontWeight: '700'
                }}>
                  トップへ戻る
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a', marginBottom: '32px' }}>
                  お問い合わせフォーム
                </h2>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                    会社名 <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input name="company" required style={{
                    width: '100%', padding: '12px 16px', border: '1px solid #ddd',
                    borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box',
                    transition: 'border-color 0.2s'
                  }} placeholder="株式会社〇〇" />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                    お名前 <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input name="name" required style={{
                    width: '100%', padding: '12px 16px', border: '1px solid #ddd',
                    borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box'
                  }} placeholder="山田 太郎" />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                    メールアドレス <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input name="email" type="email" required style={{
                    width: '100%', padding: '12px 16px', border: '1px solid #ddd',
                    borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box'
                  }} placeholder="info@example.com" />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                    弊社をお知りになったきっかけ
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {['検索エンジン', 'ご紹介', 'Instagram', '弊社からのご案内', 'その他'].map(opt => (
                      <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px', color: '#333' }}>
                        <input
                          type="radio"
                          name="referral"
                          value={opt}
                          checked={referral === opt}
                          onChange={() => setReferral(opt)}
                          style={{ accentColor: '#c0392b' }}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {referral === 'ご紹介' && (
                  <div style={{ marginBottom: '24px', background: '#fdf5f5', padding: '20px', borderRadius: '8px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                      ご紹介者様のお名前
                    </label>
                    <input name="referralName" style={{
                      width: '100%', padding: '12px 16px', border: '1px solid #ddd',
                      borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', background: '#fff'
                    }} placeholder="〇〇 様" />
                  </div>
                )}

                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '8px' }}>
                    お問い合わせ内容
                  </label>
                  <textarea name="message" rows={6} style={{
                    width: '100%', padding: '12px 16px', border: '1px solid #ddd',
                    borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box',
                    resize: 'vertical', lineHeight: '1.7'
                  }} placeholder="ご相談内容をご記入ください（情報収集段階でも大丈夫です）" />
                </div>

                <button type="submit" disabled={loading} style={{
                  width: '100%', background: loading ? '#e88' : '#c0392b', color: '#fff',
                  padding: '16px', border: 'none', borderRadius: '6px',
                  fontWeight: '700', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s'
                }}>
                  {loading ? '送信中...' : '送信する →'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div>
            {/* Flow */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #c0392b', paddingBottom: '10px' }}>
                お問い合わせの流れ
              </h3>
              {[
                { num: '01', title: 'フォーム送信', desc: '本フォームよりお問い合わせください' },
                { num: '02', title: '担当者よりご連絡', desc: '2営業日以内にご連絡します' },
                { num: '03', title: '無料相談（30〜60分）', desc: '課題・ご要望をヒアリングします' },
                { num: '04', title: 'ご提案', desc: '最適なソリューションをご提案します' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < 3 ? '20px' : '0', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: '#c0392b', color: '#fff', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontWeight: '900', fontSize: '11px', flexShrink: 0
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '14px', marginBottom: '4px' }}>{step.title}</p>
                    <p style={{ color: '#888', fontSize: '12px' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background: '#c0392b', borderRadius: '12px', padding: '28px', textAlign: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '8px' }}>情報収集段階でもOK</p>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '900', lineHeight: '1.5', marginBottom: '12px' }}>
                まずはお気軽に<br />ご相談ください
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: '1.8' }}>
                「まだ検討段階」「何から話せばいいかわからない」という段階でも大丈夫です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout { grid-template-columns: 1fr 380px; }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

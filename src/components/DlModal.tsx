'use client'
import { useState } from 'react'

interface DlModalProps {
  title: string
  documentKey: string
}

export default function DlModal({ title, documentKey }: DlModalProps) {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target as HTMLFormElement
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value,
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      document: documentKey,
    }
    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.url) {
        window.open(result.url, '_blank')
      }
    } catch {}
    setLoading(false)
    setDone(true)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: '#c0392b', color: '#fff', padding: '14px 28px',
          borderRadius: '4px', border: 'none', cursor: 'pointer',
          fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0
        }}
      >
        ダウンロード（無料）→
      </button>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }}>
          <div style={{
            background: '#fff', borderRadius: '16px', padding: '40px',
            maxWidth: '480px', width: '100%', position: 'relative'
          }}>
            <button
              onClick={() => { setOpen(false); setDone(false) }}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#999'
              }}
            >✕</button>

            {done ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#1a1a1a', marginBottom: '12px' }}>ありがとうございます</h3>
                <p style={{ color: '#888', fontSize: '14px' }}>ダウンロードが開始されました。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1a1a1a', marginBottom: '8px' }}>資料ダウンロード</h3>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '28px' }}>{title}</p>

                {[
                  { name: 'company', label: '会社名', placeholder: '株式会社〇〇' },
                  { name: 'name', label: 'お名前', placeholder: '山田 太郎' },
                  { name: 'email', label: 'メールアドレス', placeholder: 'info@example.com', type: 'email' },
                ].map(field => (
                  <div key={field.name} style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#333', marginBottom: '6px' }}>
                      {field.label} <span style={{ color: '#c0392b' }}>*</span>
                    </label>
                    <input
                      name={field.name}
                      type={field.type || 'text'}
                      required
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', padding: '12px', border: '1px solid #ddd',
                        borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%', background: loading ? '#e88' : '#c0392b',
                    color: '#fff', padding: '14px', border: 'none',
                    borderRadius: '6px', fontWeight: '700', fontSize: '15px',
                    cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px'
                  }}
                >
                  {loading ? '送信中...' : 'ダウンロードする'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

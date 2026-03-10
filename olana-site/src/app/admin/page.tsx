'use client'
import { useState } from 'react'

type PostType = 'column' | 'info'

const CATEGORIES = ['AI', '新規事業開発', 'バックオフィス業務']

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim() || `post-${Date.now()}`
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')

  // フォーム状態
  const [type, setType] = useState<PostType>('column')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [category, setCategory] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [body, setBody] = useState('')
  const [slugManual, setSlugManual] = useState(false)

  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  // 認証チェック（サーバーに確認）
  async function handleAuth() {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, type: 'auth-check', slug: '_', title: '_', body: '_', date: '_' }),
    })
    // パスワードが合っていれば認証OK（実際のエラーは別で出る）
    if (res.status !== 401) {
      setAuthed(true)
    } else {
      setAuthError('パスワードが違います')
    }
  }

  function handleTitleChange(v: string) {
    setTitle(v)
    if (!slugManual) setSlug(slugify(v))
  }

  function showMessage(msg: string, type: 'success' | 'error' = 'success') {
    setMessage(msg)
    setMessageType(type)
    setTimeout(() => setMessage(''), 4000)
  }

  function resetForm() {
    setTitle(''); setSlug(''); setCategory(''); setExcerpt(''); setThumbnail(''); setBody('')
    setDate(new Date().toISOString().split('T')[0])
    setSlugManual(false)
  }

  async function handleSave() {
    if (!title || !body) return showMessage('タイトルと本文は必須です', 'error')
    setSaving(true)
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, type, slug: slug || slugify(title), title, date, category, excerpt, thumbnail, body }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      showMessage('✓ 保存しました！Vercelが自動デプロイを開始します（1〜2分で公開）')
      resetForm()
    } catch (e: unknown) {
      showMessage(e instanceof Error ? e.message : '保存に失敗しました', 'error')
    } finally {
      setSaving(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px',
    border: '1px solid rgba(0,0,0,0.12)', borderRadius: 8,
    fontSize: 14, fontFamily: 'inherit', background: 'white',
    outline: 'none', color: '#1a1414',
  }
  const labelStyle = { display: 'block', fontSize: 12, fontWeight: 500, marginBottom: 6, color: '#7a6e6e', letterSpacing: '0.04em' }
  const fieldStyle = { marginBottom: 20 }

  // 認証画面
  if (!authed) {
    return (
      <main style={{ minHeight: '100vh', background: '#fafaf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: 48, borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', width: 360, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 8, color: '#1a1414' }}>OLANA Admin</h1>
          <p style={{ fontSize: 13, color: '#7a6e6e', marginBottom: 28 }}>管理画面にアクセスするにはパスワードが必要です。</p>
          <div style={fieldStyle}>
            <label style={labelStyle}>パスワード</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAuth()}
              style={inputStyle}
              placeholder="••••••••"
            />
            {authError && <p style={{ color: '#9a1a3c', fontSize: 12, marginTop: 6 }}>{authError}</p>}
          </div>
          <button onClick={handleAuth} style={{
            width: '100%', padding: '12px', background: '#9a1a3c', color: 'white',
            border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer',
          }}>ログイン</button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: 80, minHeight: '100vh', background: '#fafaf9' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 40px 120px' }}>
        {/* ヘッダー */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, color: '#1a1414' }}>記事投稿</h1>
            <p style={{ fontSize: 13, color: '#7a6e6e', marginTop: 4 }}>GitHubにコミット → Vercelが自動デプロイします</p>
          </div>
          <button onClick={resetForm} style={{
            padding: '8px 20px', border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 8, background: 'white', fontSize: 13, cursor: 'pointer', color: '#7a6e6e',
          }}>リセット</button>
        </div>

        {/* メッセージ */}
        {message && (
          <div style={{
            padding: '14px 20px', borderRadius: 8, marginBottom: 28,
            background: messageType === 'success' ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${messageType === 'success' ? '#86efac' : '#fca5a5'}`,
            color: messageType === 'success' ? '#15803d' : '#dc2626',
            fontSize: 14,
          }}>{message}</div>
        )}

        <div style={{ background: 'white', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', padding: 40, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>

          {/* 種別切替 */}
          <div style={{ ...fieldStyle, display: 'flex', gap: 12 }}>
            {(['column', 'info'] as PostType[]).map(t => (
              <button key={t} onClick={() => setType(t)} style={{
                padding: '10px 28px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer',
                border: type === t ? 'none' : '1px solid rgba(0,0,0,0.1)',
                background: type === t ? '#9a1a3c' : 'white',
                color: type === t ? 'white' : '#7a6e6e',
              }}>
                {t === 'column' ? 'コラム' : 'お知らせ'}
              </button>
            ))}
          </div>

          {/* タイトル */}
          <div style={fieldStyle}>
            <label style={labelStyle}>タイトル *</label>
            <input type="text" value={title} onChange={e => handleTitleChange(e.target.value)} style={inputStyle} placeholder="記事タイトルを入力" />
          </div>

          {/* Slug */}
          <div style={fieldStyle}>
            <label style={labelStyle}>スラッグ（URL）</label>
            <input type="text" value={slug} onChange={e => { setSlug(e.target.value); setSlugManual(true) }} style={inputStyle} placeholder="my-article-slug（自動生成されます）" />
            <p style={{ fontSize: 11, color: '#9e8e8e', marginTop: 4 }}>/column/{slug || 'slug'}</p>
          </div>

          {/* 2カラム: 日付 + カテゴリ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>公開日 *</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inputStyle} />
            </div>
            {type === 'column' && (
              <div>
                <label style={labelStyle}>カテゴリ</label>
                <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
                  <option value="">未設定</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}
          </div>

          {/* サムネイルURL */}
          {type === 'column' && (
            <div style={fieldStyle}>
              <label style={labelStyle}>サムネイル画像URL</label>
              <input type="text" value={thumbnail} onChange={e => setThumbnail(e.target.value)} style={inputStyle} placeholder="https://..." />
            </div>
          )}

          {/* 抜粋 */}
          <div style={fieldStyle}>
            <label style={labelStyle}>抜粋・概要（一覧に表示）</label>
            <input type="text" value={excerpt} onChange={e => setExcerpt(e.target.value)} style={inputStyle} placeholder="記事の簡単な説明（省略可）" />
          </div>

          {/* 本文 */}
          <div style={fieldStyle}>
            <label style={labelStyle}>本文（Markdown）*</label>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              style={{ ...inputStyle, minHeight: 320, resize: 'vertical', lineHeight: 1.7, fontFamily: 'DM Mono, monospace', fontSize: 13 }}
              placeholder={`## 見出し\n\n本文をMarkdownで書きます。\n\n- リスト項目1\n- リスト項目2\n\n**太字** や *斜体* も使えます。`}
            />
          </div>

          {/* プレビュー（簡易） */}
          {body && (
            <details style={{ marginBottom: 24 }}>
              <summary style={{ fontSize: 13, color: '#9a1a3c', cursor: 'pointer', marginBottom: 12 }}>プレビュー（簡易）</summary>
              <div style={{
                padding: 24, background: '#fafaf9', borderRadius: 8,
                border: '1px solid rgba(0,0,0,0.08)', fontSize: 14, lineHeight: 1.9,
                whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: '#3a3030',
              }}>{body}</div>
            </details>
          )}

          {/* 保存ボタン */}
          <button
            onClick={handleSave}
            disabled={saving || !title || !body}
            style={{
              width: '100%', padding: '16px', background: saving ? '#c97a8e' : '#9a1a3c',
              color: 'white', border: 'none', borderRadius: 8,
              fontSize: 15, fontWeight: 500, cursor: saving ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {saving ? '保存中...' : '📤 GitHubにコミットして公開'}
          </button>
        </div>

        {/* ヘルプ */}
        <div style={{ marginTop: 32, padding: 24, background: 'white', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Markdownの基本記法</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, fontFamily: 'DM Mono, monospace', color: '#7a6e6e' }}>
            {[
              ['## 見出し2', '大きな見出し'],
              ['### 見出し3', '中見出し'],
              ['**太字**', 'ボールド'],
              ['*斜体*', 'イタリック'],
              ['- リスト', '箇条書き'],
              ['[テキスト](URL)', 'リンク'],
              ['![alt](画像URL)', '画像'],
              ['> 引用テキスト', 'ブロック引用'],
            ].map(([syntax, desc]) => (
              <div key={syntax} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <code style={{ background: '#f4f2f1', padding: '2px 6px', borderRadius: 4 }}>{syntax}</code>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

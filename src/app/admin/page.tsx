'use client'
import { useState, useEffect, useRef } from 'react'

type PostType = 'column' | 'info'
type Tab = 'new' | 'list'
type BlockType = 'h2' | 'h3' | 'p' | 'img'

interface Block {
  id: string
  type: BlockType
  content: string
  alt?: string
}

const CATEGORIES = ['AI', '新規事業開発', 'バックオフィス業務']

function uid() { return Math.random().toString(36).slice(2, 9) }

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim() || `post-${Date.now()}`
}

type PostItem = { slug: string; title: string; date: string; category?: string; excerpt?: string }

function blocksToMarkdown(blocks: Block[]): string {
  return blocks.map(b => {
    if (b.type === 'h2') return `## ${b.content}`
    if (b.type === 'h3') return `### ${b.content}`
    if (b.type === 'p') return b.content
    if (b.type === 'img') return `![${b.alt || ''}](${b.content})`
    return ''
  }).join('\n\n')
}

const inp: React.CSSProperties = { width: '100%', padding: '10px 14px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 8, fontSize: 14, fontFamily: 'inherit', background: 'white', outline: 'none', color: '#1a1414', boxSizing: 'border-box' }
const lbl: React.CSSProperties = { display: 'block', fontSize: 12, fontWeight: 500, marginBottom: 6, color: '#7a6e6e', letterSpacing: '0.04em' }
const fld: React.CSSProperties = { marginBottom: 20 }

function BlockEditor({ blocks, onChange, password }: { blocks: Block[]; onChange: (b: Block[]) => void; password: string }) {
  const [uploading, setUploading] = useState<string | null>(null)
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({})

  function addBlock(type: BlockType) { onChange([...blocks, { id: uid(), type, content: '', alt: '' }]) }
  function updateBlock(id: string, patch: Partial<Block>) { onChange(blocks.map(b => b.id === id ? { ...b, ...patch } : b)) }
  function removeBlock(id: string) { onChange(blocks.filter(b => b.id !== id)) }
  function moveBlock(id: string, dir: -1 | 1) {
    const idx = blocks.findIndex(b => b.id === id)
    if (idx < 0) return
    const next = idx + dir
    if (next < 0 || next >= blocks.length) return
    const arr = [...blocks];
    [arr[idx], arr[next]] = [arr[next], arr[idx]]
    onChange(arr)
  }

  async function handleImageUpload(id: string, file: File) {
    setUploading(id)
    const fd = new FormData()
    fd.append('password', password)
    fd.append('file', file)
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      updateBlock(id, { content: data.url })
    } catch (e: unknown) { alert(e instanceof Error ? e.message : 'アップロード失敗') }
    finally { setUploading(null) }
  }

  const blockLabel: Record<BlockType, string> = { h2: '見出し', h3: '小見出し', p: '本文', img: '画像' }
  const blockColor: Record<BlockType, string> = { h2: '#1a1414', h3: '#3a2a2a', p: '#5a4a4a', img: '#9a1a3c' }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        {blocks.length === 0 && (
          <div style={{ padding: 40, textAlign: 'center', color: '#bbb', fontSize: 13, border: '2px dashed #e8e2e0', borderRadius: 12 }}>下のボタンでブロックを追加してください</div>
        )}
        {blocks.map((block, idx) => (
          <div key={block.id} style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 10, overflow: 'hidden', background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: '#fafaf9', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: blockColor[block.type], fontFamily: 'DM Mono, monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{blockLabel[block.type]}</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                <button onClick={() => moveBlock(block.id, -1)} disabled={idx === 0} style={{ padding: '3px 8px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 4, background: 'white', fontSize: 12, cursor: 'pointer', color: idx === 0 ? '#ccc' : '#7a6e6e' }}>↑</button>
                <button onClick={() => moveBlock(block.id, 1)} disabled={idx === blocks.length - 1} style={{ padding: '3px 8px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 4, background: 'white', fontSize: 12, cursor: 'pointer', color: idx === blocks.length - 1 ? '#ccc' : '#7a6e6e' }}>↓</button>
                <button onClick={() => removeBlock(block.id)} style={{ padding: '3px 8px', border: '1px solid rgba(220,50,50,0.2)', borderRadius: 4, background: 'white', fontSize: 12, cursor: 'pointer', color: '#c0392b' }}>削除</button>
              </div>
            </div>
            <div style={{ padding: 12 }}>
              {block.type === 'img' ? (
                <div>
                  {block.content && <img src={block.content} alt={block.alt} style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 6, display: 'block', border: '1px solid rgba(0,0,0,0.08)', marginBottom: 10 }} />}
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <input type="file" accept="image/*" ref={el => { fileRefs.current[block.id] = el }} style={{ display: 'none' }} onChange={e => { const f = e.target.files?.[0]; if (f) handleImageUpload(block.id, f) }} />
                    <button onClick={() => fileRefs.current[block.id]?.click()} disabled={uploading === block.id} style={{ padding: '8px 16px', background: '#9a1a3c', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}>{uploading === block.id ? 'アップロード中...' : '📁 画像を選択'}</button>
                    <span style={{ fontSize: 12, color: '#9e8e8e' }}>または</span>
                    <input type="text" value={block.content} onChange={e => updateBlock(block.id, { content: e.target.value })} style={{ ...inp, flex: 1 }} placeholder="画像URLを直接入力" />
                  </div>
                  <input type="text" value={block.alt || ''} onChange={e => updateBlock(block.id, { alt: e.target.value })} style={inp} placeholder="alt テキスト（画像の説明）" />
                </div>
              ) : block.type === 'p' ? (
                <textarea value={block.content} onChange={e => updateBlock(block.id, { content: e.target.value })} style={{ ...inp, minHeight: 100, resize: 'vertical', lineHeight: 1.75 }} placeholder="本文を入力..." />
              ) : (
                <input type="text" value={block.content} onChange={e => updateBlock(block.id, { content: e.target.value })} style={{ ...inp, fontWeight: block.type === 'h2' ? 700 : 600, fontSize: block.type === 'h2' ? 16 : 14 }} placeholder={block.type === 'h2' ? '見出しを入力...' : '小見出しを入力...'} />
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {([['h2', '＋ 見出し'], ['h3', '＋ 小見出し'], ['p', '＋ 本文'], ['img', '＋ 画像']] as [BlockType, string][]).map(([type, label]) => (
          <button key={type} onClick={() => addBlock(type)} style={{ padding: '8px 18px', border: `1.5px dashed ${type === 'img' ? '#9a1a3c' : 'rgba(0,0,0,0.15)'}`, borderRadius: 8, background: 'white', fontSize: 13, cursor: 'pointer', color: type === 'img' ? '#9a1a3c' : '#7a6e6e', fontWeight: 500 }}>{label}</button>
        ))}
      </div>
    </div>
  )
}

function ThumbnailUpload({ value, onChange, password }: { value: string; onChange: (url: string) => void; password: string }) {
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  async function handleFile(file: File) {
    setUploading(true)
    const fd = new FormData()
    fd.append('password', password)
    fd.append('file', file)
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      onChange(data.url)
    } catch (e: unknown) { alert(e instanceof Error ? e.message : 'アップロード失敗') }
    finally { setUploading(false) }
  }
  return (
    <div>
      <input type="file" accept="image/*" ref={fileRef} style={{ display: 'none' }} onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => fileRef.current?.click()} disabled={uploading} style={{ padding: '8px 16px', background: '#9a1a3c', color: 'white', border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }}>{uploading ? 'アップロード中...' : '📁 画像をアップロード'}</button>
        <span style={{ fontSize: 12, color: '#9e8e8e' }}>または</span>
        <input type="text" value={value} onChange={e => onChange(e.target.value)} style={inp} placeholder="サムネイル画像URL" />
      </div>
      {value && <img src={value} alt="サムネイル" style={{ maxHeight: 160, borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', display: 'block', marginTop: 8 }} />}
    </div>
  )
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')
  const [tab, setTab] = useState<Tab>('new')
  const [listType, setListType] = useState<PostType>('info')
  const [posts, setPosts] = useState<PostItem[]>([])
  const [loadingList, setLoadingList] = useState(false)
  const [type, setType] = useState<PostType>('info')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [category, setCategory] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [blocks, setBlocks] = useState<Block[]>([])
  const [slugManual, setSlugManual] = useState(false)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  async function handleAuth() {
    const res = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password, type: 'auth-check', slug: '_', title: '_', body: '_', date: '_' }) })
    if (res.status !== 401) { setAuthed(true) } else { setAuthError('パスワードが違います') }
  }

  function handleTitleChange(v: string) { setTitle(v); if (!slugManual) setSlug(slugify(v)) }
  function showMessage(msg: string, t: 'success' | 'error' = 'success') { setMessage(msg); setMessageType(t); setTimeout(() => setMessage(''), 6000) }
  function resetForm() { setTitle(''); setSlug(''); setCategory(''); setExcerpt(''); setThumbnail(''); setBlocks([]); setDate(new Date().toISOString().split('T')[0]); setSlugManual(false); setEditingSlug(null) }

  async function fetchPostList(t: PostType) {
    setLoadingList(true); setPosts([])
    try {
      const res = await fetch(`/api/posts?type=${t}&password=${encodeURIComponent(password)}`)
      if (!res.ok) throw new Error()
      const data = await res.json()
      setPosts(data.posts ?? [])
    } catch { showMessage('一覧の取得に失敗しました', 'error') }
    finally { setLoadingList(false) }
  }

  useEffect(() => { if (authed && tab === 'list') fetchPostList(listType) }, [authed, tab, listType])

  async function handleSave() {
    if (!title || blocks.length === 0) return showMessage('タイトルと本文（最低1ブロック）は必須です', 'error')
    const body = blocksToMarkdown(blocks)
    setSaving(true)
    try {
      const res = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password, type, slug: slug || slugify(title), title, date, category, excerpt, thumbnail, body }) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      showMessage(editingSlug ? '✓ 更新しました！' : '✓ 投稿しました！（1〜2分で公開）')
      resetForm()
      if (tab === 'list') fetchPostList(listType)
    } catch (e: unknown) { showMessage(e instanceof Error ? e.message : '保存に失敗しました', 'error') }
    finally { setSaving(false) }
  }

  async function handleDelete(t: PostType, s: string, ttl: string) {
    if (!confirm(`「${ttl}」を削除しますか？`)) return
    setDeleting(s)
    try {
      const res = await fetch('/api/posts', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password, type: t, slug: s }) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      showMessage('✓ 削除しました'); fetchPostList(listType)
    } catch (e: unknown) { showMessage(e instanceof Error ? e.message : '削除に失敗しました', 'error') }
    finally { setDeleting(null) }
  }

  function handleEdit(post: PostItem, t: PostType) {
    setTab('new'); setType(t); setTitle(post.title); setSlug(post.slug); setDate(post.date)
    setCategory(post.category ?? ''); setExcerpt(post.excerpt ?? ''); setEditingSlug(post.slug); setSlugManual(true)
    setBlocks([{ id: uid(), type: 'p', content: '※ 本文はブロックで再入力してください' }])
    showMessage('編集モード：本文ブロックを組み立て直して「更新」してください', 'success')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!authed) {
    return (
      <main style={{ minHeight: '100vh', background: '#fafaf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: 48, borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', width: 360, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>OLANA Admin</h1>
          <p style={{ fontSize: 13, color: '#7a6e6e', marginBottom: 28 }}>管理画面にアクセスするにはパスワードが必要です。</p>
          <div style={fld}>
            <label style={lbl}>パスワード</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAuth()} style={inp} placeholder="••••••••" />
            {authError && <p style={{ color: '#9a1a3c', fontSize: 12, marginTop: 6 }}>{authError}</p>}
          </div>
          <button onClick={handleAuth} style={{ width: '100%', padding: 12, background: '#9a1a3c', color: 'white', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>ログイン</button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh', background: '#fafaf9' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 40px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800 }}>OLANA Admin</h1>
          <span style={{ fontSize: 12, color: '#9e8e8e' }}>ログイン中</span>
        </div>

        {message && <div style={{ padding: '14px 20px', borderRadius: 8, marginBottom: 24, background: messageType === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${messageType === 'success' ? '#86efac' : '#fca5a5'}`, color: messageType === 'success' ? '#15803d' : '#dc2626', fontSize: 14 }}>{message}</div>}

        <div style={{ display: 'flex', gap: 4, marginBottom: 32, background: 'white', padding: 4, borderRadius: 10, border: '1px solid rgba(0,0,0,0.08)', width: 'fit-content' }}>
          {([['new', '✏️  新規投稿'], ['list', '📋  記事管理']] as [Tab, string][]).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t as Tab)} style={{ padding: '10px 28px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer', border: 'none', background: tab === t ? '#9a1a3c' : 'transparent', color: tab === t ? 'white' : '#7a6e6e', transition: 'all 0.2s' }}>{label}</button>
          ))}
        </div>

        {tab === 'new' && (
          <div style={{ background: 'white', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', padding: 40, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700 }}>{editingSlug ? `編集中：${editingSlug}` : '新規投稿'}</h2>
              <button onClick={resetForm} style={{ padding: '8px 20px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, background: 'white', fontSize: 13, cursor: 'pointer', color: '#7a6e6e' }}>リセット</button>
            </div>

            <div style={{ ...fld, display: 'flex', gap: 10 }}>
              {(['info', 'column'] as PostType[]).map(t => (
                <button key={t} onClick={() => setType(t)} style={{ padding: '10px 28px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer', border: type === t ? 'none' : '1px solid rgba(0,0,0,0.1)', background: type === t ? '#9a1a3c' : 'white', color: type === t ? 'white' : '#7a6e6e' }}>{t === 'info' ? 'お知らせ' : 'コラム'}</button>
              ))}
            </div>

            <div style={fld}>
              <label style={lbl}>タイトル *</label>
              <input type="text" value={title} onChange={e => handleTitleChange(e.target.value)} style={inp} placeholder="タイトルを入力" />
            </div>
            <div style={fld}>
              <label style={lbl}>スラッグ（URL）</label>
              <input type="text" value={slug} onChange={e => { setSlug(e.target.value); setSlugManual(true) }} style={inp} placeholder="url-slug" />
              <p style={{ fontSize: 11, color: '#9e8e8e', marginTop: 4 }}>/{type}/{slug || 'slug'}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={lbl}>公開日 *</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inp} />
              </div>
              {type === 'column' && (
                <div>
                  <label style={lbl}>カテゴリ</label>
                  <select value={category} onChange={e => setCategory(e.target.value)} style={inp}>
                    <option value="">未設定</option>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              )}
            </div>
            {type === 'column' && (
              <div style={fld}>
                <label style={lbl}>サムネイル画像</label>
                <ThumbnailUpload value={thumbnail} onChange={setThumbnail} password={password} />
              </div>
            )}
            <div style={fld}>
              <label style={lbl}>抜粋・概要（一覧に表示）</label>
              <input type="text" value={excerpt} onChange={e => setExcerpt(e.target.value)} style={inp} placeholder="記事の簡単な説明（省略可）" />
            </div>
            <div style={fld}>
              <label style={{ ...lbl, marginBottom: 12 }}>本文 *</label>
              <BlockEditor blocks={blocks} onChange={setBlocks} password={password} />
            </div>
            {blocks.length > 0 && (
              <details style={{ marginBottom: 24 }}>
                <summary style={{ fontSize: 13, color: '#9a1a3c', cursor: 'pointer', marginBottom: 12 }}>Markdownプレビュー（確認用）</summary>
                <pre style={{ padding: 20, background: '#fafaf9', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', fontSize: 12, lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: 'DM Mono, monospace', color: '#3a3030', overflowX: 'auto' }}>{blocksToMarkdown(blocks)}</pre>
              </details>
            )}
            <button onClick={handleSave} disabled={saving || !title || blocks.length === 0} style={{ width: '100%', padding: 16, background: saving ? '#c97a8e' : '#9a1a3c', color: 'white', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: saving ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
              {saving ? '保存中...' : editingSlug ? '📤 更新してGitHubにコミット' : '📤 GitHubにコミットして公開'}
            </button>
          </div>
        )}

        {tab === 'list' && (
          <div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {(['info', 'column'] as PostType[]).map(t => (
                <button key={t} onClick={() => setListType(t)} style={{ padding: '10px 28px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer', border: listType === t ? 'none' : '1px solid rgba(0,0,0,0.1)', background: listType === t ? '#9a1a3c' : 'white', color: listType === t ? 'white' : '#7a6e6e' }}>{t === 'info' ? 'お知らせ' : 'コラム'}</button>
              ))}
              <button onClick={() => fetchPostList(listType)} style={{ marginLeft: 'auto', padding: '10px 20px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, background: 'white', fontSize: 13, cursor: 'pointer', color: '#7a6e6e' }}>↻ 再読み込み</button>
            </div>
            <div style={{ background: 'white', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              {loadingList ? (
                <div style={{ padding: 60, textAlign: 'center', color: '#9e8e8e', fontSize: 14 }}>読み込み中...</div>
              ) : posts.length === 0 ? (
                <div style={{ padding: 60, textAlign: 'center', color: '#9e8e8e', fontSize: 14 }}>記事がありません。</div>
              ) : posts.map((post, i) => (
                <div key={post.slug} style={{ display: 'grid', gridTemplateColumns: '130px 1fr auto', gap: 20, alignItems: 'center', padding: '20px 28px', borderTop: i > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <time style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#9e8e8e' }}>{post.date}</time>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{post.title}</p>
                    {post.excerpt && <p style={{ fontSize: 12, color: '#9e8e8e', lineHeight: 1.5 }}>{post.excerpt}</p>}
                    <p style={{ fontSize: 11, color: '#bbb', marginTop: 3, fontFamily: 'DM Mono, monospace' }}>/{listType}/{post.slug}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => handleEdit(post, listType)} style={{ padding: '8px 16px', border: '1px solid rgba(154,26,60,0.3)', borderRadius: 6, background: 'white', fontSize: 12, color: '#9a1a3c', cursor: 'pointer' }}>編集</button>
                    <button onClick={() => handleDelete(listType, post.slug, post.title)} disabled={deleting === post.slug} style={{ padding: '8px 16px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 6, background: deleting === post.slug ? '#f4f2f1' : 'white', fontSize: 12, color: '#c0392b', cursor: 'pointer' }}>
                      {deleting === post.slug ? '削除中...' : '削除'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

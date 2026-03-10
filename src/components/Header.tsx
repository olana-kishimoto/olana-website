'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'トップ' },
    { href: '/company', label: '会社概要' },
    { href: '/business/aiagent', label: '事業内容' },
    { href: '/info', label: 'お知らせ' },
    { href: '/column', label: 'コラム' },
    { href: '/contact', label: 'お問い合わせ' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#fff', borderBottom: '1px solid #eee',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', height: '64px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Image
          src="/olana-logo-red.png"
          alt="OLANA"
          width={120}
          height={32}
          style={{ height: '32px', width: 'auto', display: 'block' }}
        />
      </Link>

      {/* PC Nav */}
      <div className="nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              textDecoration: 'none',
              color: pathname === link.href ? '#c0392b' : '#333',
              fontWeight: pathname === link.href ? '700' : '400',
              fontSize: '14px',
              transition: 'color 0.2s',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" style={{
          background: '#c0392b', color: '#fff', padding: '8px 20px',
          borderRadius: '4px', textDecoration: 'none', fontSize: '13px', fontWeight: '600'
        }}>
          無料相談
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px'
        }}
        aria-label="メニュー"
      >
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#333' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#333' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#333' }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 999, padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '20px'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', color: '#333', fontSize: '16px',
                padding: '12px 0', borderBottom: '1px solid #eee'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#c0392b', color: '#fff', padding: '14px',
              borderRadius: '4px', textDecoration: 'none', textAlign: 'center',
              fontSize: '15px', fontWeight: '600', marginTop: '8px'
            }}
          >
            無料相談
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

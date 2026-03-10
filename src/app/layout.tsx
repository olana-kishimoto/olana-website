import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '株式会社オルアナ | ITとAIの力ですべてのビジネスを未来へ加速させる',
  description: 'AIエージェント開発・新規事業開発・システム開発・バックオフィス業務支援を通じ、ITとAIの力ですべてのビジネスを未来へ加速させます。',
  metadataBase: new URL(process.env.SITE_URL || 'https://olana.jp'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0, fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

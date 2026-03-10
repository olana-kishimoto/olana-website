/** @type {import('next').NextConfig} */
const nextConfig = {
  // XServer Node.js環境用：standaloneモードでビルド
  output: 'standalone',
  images: {
    domains: ['olana.jp'],
  },
  // 本番URLの設定
  env: {
    SITE_URL: process.env.SITE_URL || 'https://olana.jp',
  },
}
module.exports = nextConfig

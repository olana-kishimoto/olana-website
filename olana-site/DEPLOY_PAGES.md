# 新規ページのデプロイ手順

## 追加されたページ一覧

| ページ | URL |
|--------|-----|
| トップページ | / |
| 会社概要 | /company |
| AIエージェント開発 | /business/aiagent |
| 新規事業開発 | /business/newbusiness |
| システム開発 | /business/systemdev |
| バックオフィス業務支援 | /business/backoffice |
| お問い合わせ | /contact |
| お知らせ一覧 | /info |
| コラム一覧 | /column |
| 管理画面 | /admin |

## 画像ファイルの配置

以下のファイルを `public/images/` に配置してください：

- `public/images/hero.png` — トップページ ヒーロー画像
- `public/images/about.png` — Aboutセクション画像
- `public/images/method.png` — オルアナメソッド画像
- `public/images/col1.png` — コラムサムネイル1
- `public/images/col2.png` — コラムサムネイル2
- `public/images/col3.png` — コラムサムネイル3

ロゴファイル（public直下）：
- `public/olana-logo-red.png`
- `public/olana-logo-white.png`

資料PDFファイル（public/downloads/）：
- `public/downloads/ai_guidebook.pdf`
- `public/downloads/newbusiness_guidebook.pdf`
- `public/downloads/keiriai_guidebook.pdf`

## サーバーでのデプロイ（SSH）

```bash
ssh olana@sv16592.xserver.jp -p 10022
cd ~/olana.jp/public_html/new.olana.jp/olana-site

git pull origin main
npm install
npm run build
pm2 restart olana --update-env
```

## GitHub Actionsによる自動デプロイ

`git push origin main` するだけで自動的にデプロイされます。
https://github.com/olana-kishimoto/olana-website/actions で状況を確認できます。

## 環境変数（.env.local）

```
SITE_URL=https://new.olana.jp
GITHUB_TOKEN=ghp_xxxx
GITHUB_OWNER=olana-kishimoto
GITHUB_REPO=olana-website
ADMIN_PASSWORD=your-password
SMTP_HOST=sv16592.xserver.jp
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@olana.jp
SMTP_PASS=your-mail-password
NOTIFY_EMAIL=info@olana.jp
```

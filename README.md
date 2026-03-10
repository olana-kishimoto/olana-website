# オルアナ公式サイト

## セットアップ

```bash
npm install
cp .env.local.example .env.local
# .env.local に値を設定してください
npm run dev
```

## デプロイ手順

1. GitHubにリポジトリを作成してプッシュ
2. Vercel（vercel.com）でリポジトリを連携
3. Vercelの環境変数に `.env.local.example` の4つの値を設定
4. デプロイ完了 🎉

## 記事の投稿

`/admin` にアクセスして管理画面から投稿できます。
保存するとGitHubにコミットされ、Vercelが自動でビルド・デプロイします（1〜2分で反映）。

## ディレクトリ構成

```
posts/
  column/   ← コラム記事（.mdファイル）
  info/     ← お知らせ記事（.mdファイル）
src/
  app/
    column/     ← コラム一覧・詳細
    info/       ← お知らせ一覧・詳細
    admin/      ← 管理画面
    api/posts/  ← GitHub APIへのプロキシ
  lib/
    posts.ts    ← Markdown読み込みユーティリティ
    github.ts   ← GitHub APIユーティリティ
```

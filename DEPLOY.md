# XServerデプロイ手順

## リポジトリ
https://github.com/olana-kishimoto/olana-website

---

## STEP 1：ローカルでGitにプッシュ

ZIPを解凍したフォルダで以下を実行：

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/olana-kishimoto/olana-website.git
git push -u origin main
```

---

## STEP 2：XServerでサブドメイン作成

1. XServerサーバーパネル → 「ドメイン設定」→「サブドメイン設定」
2. `new.olana.jp` を追加
3. ドキュメントルート確認：`~/olana.jp/public_html/new/`

---

## STEP 3：SSH接続

```bash
ssh アカウント名@sv******.xserver.jp -p 10022
```

---

## STEP 4：Node.jsバージョン確認

```bash
node -v   # 18以上であること

# 18未満の場合
nvm install 18
nvm use 18
nvm alias default 18
```

---

## STEP 5：プロジェクトをclone

```bash
cd ~/olana.jp/public_html/new

git clone https://github.com/olana-kishimoto/olana-website.git .
```

---

## STEP 6：環境変数を設定

```bash
cp .env.local.example .env.local
nano .env.local
```

以下を実際の値に書き換えて保存（Ctrl+X → Y → Enter）：

```
GITHUB_TOKEN=ghp_実際のトークン
ADMIN_PASSWORD=決めたパスワード
SMTP_HOST=sv******.xserver.jp  ← サーバーパネルで確認
SMTP_PASS=info@olana.jpのメールパスワード
```

### GitHub Tokenの取得方法
1. GitHub → 右上アイコン → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token → repo にチェック → 生成

---

## STEP 7：ビルド・起動

```bash
npm install
npm run build

# pm2インストール（初回のみ）
npm install -g pm2

# 起動
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # 表示されたコマンドをコピーして実行
```

---

## STEP 8：PDFを配置

```bash
mkdir -p public/downloads
```

FTPソフト（FileZilla等）で以下をアップロード：
```
public/downloads/ai_guidebook.pdf
public/downloads/newbusiness_guidebook.pdf
public/downloads/keiriai_guidebook.pdf
```

ビルド後にPDFを追加した場合は再ビルド不要（publicフォルダは静的配信）

---

## STEP 9：.htaccessを設置

```bash
cp .htaccess ~/olana.jp/public_html/new/.htaccess
```

---

## STEP 10：動作確認チェックリスト

`https://new.olana.jp` で確認：

- [ ] トップページが表示される
- [ ] 各事業ページ（AI・新規事業・システム・バックオフィス）
- [ ] 会社概要・お問い合わせ・お知らせ
- [ ] ハンバーガーメニュー（スマホ幅）
- [ ] 資料DLモーダル → フォーム送信 → 管理者にメール届く
- [ ] `/admin` でログインできる
- [ ] 記事投稿 → GitHubにコミットされる
- [ ] `/info` に記事が表示される

---

## STEP 11：本番切替（確認完了後）

WordPressのドキュメントルートをバックアップして差し替え：

```bash
# WordPressをバックアップ
mv ~/olana.jp/public_html ~/olana.jp/public_html_wp_backup
mkdir ~/olana.jp/public_html

# Next.jsのファイルをルートに展開
cp -r ~/olana.jp/public_html/new/. ~/olana.jp/public_html/

# .htaccessを設置
cp .htaccess ~/olana.jp/public_html/.htaccess

# pm2を新しいパスで再起動
pm2 delete olana
cd ~/olana.jp/public_html
pm2 start ecosystem.config.js
pm2 save
```

これでDNS変更なしで `olana.jp` がNext.jsに切り替わります。

---

## トラブルシュート

| 症状 | 対処 |
|------|------|
| 502 Bad Gateway | `pm2 list` → `pm2 restart olana` |
| ページが真っ白 | `pm2 logs olana` でエラー確認 |
| ビルドエラー | `node -v` で18以上か確認 |
| 環境変数が読めない | `.env.local` がプロジェクトルートにあるか確認 |
| pm2が再起動後消える | `pm2 startup` → 表示コマンド実行 → `pm2 save` |

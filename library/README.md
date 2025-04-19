## レイヤードアーキテクチャ
プレゼンテーション層
↓
ビジネスロジック層
↓
データアクセス層

## 構築手順
npm init -y
npm i express @prisma/client
npm i -D typescript @types/node @types/express ts-node-dev prisma
npx tsc --init

### 動作確認
npm run dev
curl localhost:3000
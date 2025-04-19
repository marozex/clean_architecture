## レイヤードアーキテクチャ
```
プレゼンテーション層
↓
ビジネスロジック層
↓
データアクセス層
```

## 構築手順
### 基礎手順
```
npm init -y
npm i express @prisma/client
npm i -D typescript @types/node @types/express ts-node-dev prisma
npx tsc --init

npm run dev
curl localhost:3000
```

### DB
```
npx prisma init
vi .env // sqliteに変更
vi schema.prisma // モデル定義追加
npx prisma db push // DBスキーマ更新
npx prisma generate // 型定義生成
```
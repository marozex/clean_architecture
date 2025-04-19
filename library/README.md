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

### リクエストテスト
```
curl --json '{"title":"入門"}' http://localhost:3000/books

curl http://localhost:3000/books/b58d0bb0-bfd4-4c34-b83e-728c68db7729 //一つ前のコマンドで登録したレコードのIDを指定
curl http://localhost:3000/books/hogehoge //存在しないIDなのでエラー
```
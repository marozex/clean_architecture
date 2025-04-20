## レイヤードアーキテクチャ

### 密結合

```
プレゼンテーション層
↓
ビジネスロジック層
↓
データアクセス層
```

### 疎結合

```
プレゼンテーション層
↓
ビジネスロジック層
  インターフェース←サービス
↓
データアクセス層
  インターフェース←サービス
```

## クリーンアーキテクチャ

```
（↑外）

フレームワーク＆ドライバー層(infrastructure)：フレームワーク、DBアクセス、外部API接続など
  - expressのrouterなど

インターフェースアダプター層(adapter)：ビジネスロジックと外部インターフェースをつなげる
  - コントローラー（expressとビジネスロジックをつなぐ。ユーザーリクエストを受取り適切なユースケースを実行する）
  - リポジトリ（prismaとビジネスロジックをつなぐ。書籍の永続化を行う）
  - ゲートウェイ
  - プレゼンター

ユースケース層(application)：ユーザー操作やビジネスルールの具体的な適用方法
  - ユースケース
  - DTO（インターフェースアダプター層とのやり取りに使う）

エンティティ層(domain)：ビジネスルールやプロセスを表現
  - エンティティ
  - リポジトリ（エンティティのライフサイクルを制御するinterfaceを提供。エンティティのCRUD操作）

（↓内）
```

## 構築手順

### 基礎手順

```
npm init -y
npm i express @prisma/client uuid
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

### テスト

```
npm i -D jest @types/jest ts-jest
npx ts-jest config:init
vi package.json //testコマンドをjestに修正
//テストケース追加
npm test
```

### リクエストテスト

```
curl -X POST --json '{"title":"入門"}' http://localhost:3000/books

curl -X GET http://localhost:3000/books/b58d0bb0-bfd4-4c34-b83e-728c68db7729 //一つ前のコマンドで登録したレコードのIDを指定
curl -X GET http://localhost:3000/books/hogehoge //存在しないIDなのでエラー
```

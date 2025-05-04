## 環境構築

ts-node ではなく tsx を使う

```
npm install --save-dev typescript tsx @types/express nodemon @types/morgan
npm install express morgan
```

### 動作確認

1. npx tsx hello.ts
2. hello ts が表示されれば OK

### express 動作確認

1. npx tsx src/main.ts
2. `http://localhost:3311/api/hello` にアクセスして hello express が表示されれば OK

### nodemon 動作確認

1. nodemo.json 追加
2. package.json の scripts に nodemon 追記
3. `npm start`

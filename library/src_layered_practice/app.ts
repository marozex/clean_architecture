import express from "express";

const app = express();

app.use(express.json());

const PORT = 3322;

app.get("/", (req, res) => {
  res.json({ message: "hello practice" });
});

app.listen(PORT, () => console.log("サーバー"));

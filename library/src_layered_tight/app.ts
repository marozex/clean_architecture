import express from "express";
import { BookController } from "./presentation/bookController";

const app = express();

app.use(express.json());

const bookController = new BookController();

const PORT = process.env.PORT || 3000;

app.post("/books", bookController.add.bind(bookController));
app.get("/books/:id", bookController.findById.bind(bookController));

// 動作確認用サンプルエンドポイント
// app.get("/", (req, res) => {
//   res.json({ message: "hello express" });
// });

app.listen(PORT, () => console.log("Server is running"));

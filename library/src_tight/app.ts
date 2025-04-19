import express from "express";
import { BookcController } from "./presentation/bookController";

const app = express();

app.use(express.json());

const bookcController = new BookcController();

const PORT = process.env.PORT || 3000;

app.post("/books", bookcController.add.bind(bookcController));
app.get("/books/:id", bookcController.findById.bind(bookcController));

// 動作確認用サンプルエンドポイント
// app.get("/", (req, res) => {
//   res.json({ message: "hello express" });
// });

app.listen(PORT, () => console.log("Server is running"));

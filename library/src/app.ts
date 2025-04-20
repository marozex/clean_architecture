import express from "express";
import { BookController } from "./adapter/controllers/bookController";
import { PrismaBookRepository } from "./dataAccess/prismaBookRepository";
import { BookService } from "./businessLogic/bookService";

const app = express();

app.use(express.json());

const bookRepository = new PrismaBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

const PORT = process.env.PORT || 3000;

app.post("/books", bookController.add.bind(bookController));
app.get("/books/:id", bookController.findById.bind(bookController));

// 動作確認用サンプルエンドポイント
// app.get("/", (req, res) => {
//   res.json({ message: "hello express" });
// });

app.listen(PORT, () => console.log("Server is running"));

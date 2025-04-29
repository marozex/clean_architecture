import express from "express";
import { BookController } from "./presentation/bookController";

const app = express();

app.use(express.json());

const PORT = 3322;

const bookController = new BookController();

app.post("/books", bookController.add.bind(bookController));
app.get("/books/:id", bookController.findById.bind(bookController));

app.get("/", (req, res) => {
  res.json({ message: "hello practice" });
});

app.listen(PORT, () => console.log("サーバー"));

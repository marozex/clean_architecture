import { Request, Response } from "express";
import { BookService } from "../businessLogic/bookService";

export class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  async add(req: Request, res: Response): Promise<void> {
    try {
      const title = req.body.title as string;
      const book = await this.bookService.add(title);
      res.status(201).json(book);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "登録失敗" });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id as string;
      const book = await this.bookService.findById(id);
      if (book) {
        res.status(201).json(book);
      } else {
        res.status(404).json({ error: "書籍見つからない" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "書籍検索エラー" });
    }
  }
}

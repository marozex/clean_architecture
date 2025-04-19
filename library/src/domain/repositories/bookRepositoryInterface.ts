// エンティティの永続化を担当する

import { Book } from "../entities/book";
export interface BookRepopsitoryInterface {
  create(book: Book): Promise<Book>;
  // findById(id: string): Promise<Book | null>;
}

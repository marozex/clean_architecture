import { Book } from "@prisma/client";
export interface BookRepopsitoryInterface {
  create(title: string): Promise<Book>;
  findById(id: string): Promise<Book | null>;
}

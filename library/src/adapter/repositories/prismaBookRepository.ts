import { PrismaClient } from "@prisma/client";
import { Book } from "../../domain/entities/book";
import { BookRepopsitoryInterface } from "../../domain/repositories/bookRepositoryInterface";

export class PrismaBookRepository implements BookRepopsitoryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  async create(book: Book): Promise<Book> {
    const createdBook = await this.prisma.book.create({
      data: {
        id: book.id,
        title: book.title,
        isAvailable: book.isAvailable,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
      },
    });

    return new Book(
      createdBook.id,
      createdBook.title,
      createdBook.isAvailable,
      createdBook.createdAt,
      createdBook.updatedAt
    );
  }

  // async findById(id: string): Promise<Book | null> {
  //   return await this.prisma.book.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}

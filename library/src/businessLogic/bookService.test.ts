import { BookRepopsitoryInterface } from "../domain/repositories/bookRepositoryInterface";
import { BookService } from "./bookService";
import { Book } from "@prisma/client";

const mockBookRepository: jest.Mocked<BookRepopsitoryInterface> = {
  create: jest.fn(),
  findById: jest.fn(),
};

describe("BookService", () => {
  let bookService: BookService;

  beforeEach(() => {
    bookService = new BookService(mockBookRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("書籍登録成功", async () => {
    const newBook: Book = {
      id: "1",
      title: "Test Book",
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockBookRepository.create.mockResolvedValue(newBook);

    const result = await bookService.add("Test book");

    expect(result).toEqual(newBook);
  });
});

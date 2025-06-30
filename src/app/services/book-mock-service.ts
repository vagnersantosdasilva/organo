
import { BookDto } from "../models/book.models";


export const listBooks: BookDto[] = [
  {
    title: 'As ondas',
    author: 'Virginia Woolf',
    genre: {
      id: '1',
      value: 'Romance',
      books: []
    },
    favorite: false,
    image: 'assets/sem-livros.png'
  },

  {
    title: "The Waves",
    author: "Virginia Woolf",
    favorite: false,
    genre: {
      id: '2',
      value: 'Fiction',
      books: []
    },
    image: 'assets/sem-livros.png'
  }
]

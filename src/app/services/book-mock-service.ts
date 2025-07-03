
import { Injectable } from "@angular/core";
import { BookDto, BookListByGenre } from "../models/book.models";


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private books = [...listBooks];

  public getBooksGroupedByGenre(): BookListByGenre[] {
    const genreMap = new Map<string, BookListByGenre>();

    this.books.forEach(book => {
      const genreId = book.genre.id;
      if (!genreMap.has(genreId)) {
        genreMap.set(genreId, {
          genreId: genreId,
          genreValue: book.genre.value,
          books: []
        });
      }
      genreMap.get(genreId)!.books.push(book);
    });

    return Array.from(genreMap.values());
  }
}

//Simular o retorno de um objeto Json não muito favorável para ser trabalhado com alguma estrtura de dados.
export const listBooks: BookDto[] = [

  // romances

  {
    title: "O Código Da Vinci",
    author: "Dan Brown",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/41aVasi7pML._SY445_SX342_PQ80_.jpg"
  },
  {
    title: "Tequila Vermelha",
    author: "Rick Riordan",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/51UxkjFzxeL._SX342_SY445_PQ80_.jpg"
  },
  {
    title: "Crime e Castigo",
    author: "Fiódor Dostoiévski",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/913vzt-27sL._SY425_.jpg"
  },
  {
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/61pMh14GJ1L._SY466_.jpg"

  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/91PXTOPm8ZL._SY466_.jpg"
  },
  {
    title: "O nome da rosa",
    author: "Umberto Eco",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/91JZsgGQfDL._SY425_.jpg"
  },


  {
    title: "1984",
    author: "George Orwell",
    favorite: false,
    genre: {
      id: '2',
      value: 'Distopias',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  {
    title: "Ensaio sobre a cegueira",
    author: "José Saramago",
    favorite: false,
    genre: {
      id: '2',
      value: 'Distopias',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/41CPf+JZQWL._SY466_.jpg"
  },
  {
    title: "O Processo",
    author: "Franz Kafka",
    favorite: false,
    genre: {
      id: '2',
      value: 'Distopias',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/71owB1MWj+L._SY466_.jpg"
  },

  {
    title: "Fahrenheit 451",
    author: " Ray Bradbury",
    favorite: false,
    genre: {
      id: '2',
      value: 'Distopias',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/51tAD6LyZ-L._SY466_.jpg"
  },

  //Fantasia
  {
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    favorite: false,
    genre: {
      id: '3',
      value: 'Fantasia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/91k0NXj1+wL._SY466_.jpg"
  },
  {
    title: "Percy Jackson e o Ladrão de Raios",
    author: "Rick Riordan",
    favorite: false,
    genre: {
      id: '3',
      value: 'Fantasia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/91WN6a6F3RL._SY466_.jpg"
  },
  {
    title: "Notas de subsolo",
    author: "Fiódor Dostoiévski",
    favorite: false,
    genre: {
      id: '1',
      value: 'Romances',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/71aQwRTUNlL._SY522_.jpg"
  },

  {
    title: "Clean Code",
    author: "Robert C. Martin",
    favorite: true,
    genre: {
      id: '4',
      value: 'Técnico',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/41SH-SvWPxL._SX374_BO1,204,203,200_.jpg"
  },
  {
    title: "Design Patterns: Elements ...",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    favorite: false,
    genre: {
      id: '4',
      value: 'Técnico',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81gtKoapHFL.jpg"
  },
  {
    title: "Aprendendo Typescript",
    author: "Josh Goldberg",
    favorite: false,
    genre: {
      id: '4',
      value: 'Técnico',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81tK8zB3ZvL._SY425_.jpg"
  },
  {
    title: "Aprendendo Git",
    author: "Anna Skoulikari",
    favorite: false,
    genre: {
      id: '4',
      value: 'Técnico',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/61SWzDjgG5L._SY425_.jpg"
  },
  {
    title: "Data Science do Zero",
    author: "Andrew Hunt, David Thomas",
    favorite: true,
    genre: {
      id: '4',
      value: 'Técnico',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/61XjQaNZ4mL._SY425_.jpg"
  },
  {
    title: "Mãos a obra: Aprendizado de ...",
    author: "Aurélien Géron",
    favorite: true,
    genre: {
      id: '4',
      value: 'Técnico',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81jMD46ML-L._SY425_.jpg"
  },


  // DIVULGAÇÃO CIENTÍFICA
  {
    title: "O Andar do Bêbado",
    author: "Leonard Mlodinow",
    favorite: true,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/818-+4cAgBL._SY425_.jpg"
  },
  {
    title: "Batendo à Porta do Céu",
    author: "Lisa Randall",
    favorite: false,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/A1uPxzXid5L._SY466_.jpg"
  },
  {
    title: "O Grande Projeto",
    author: "Stephen Hawking, Leonard Mlodinow",
    favorite: false,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/91-6ircqhnL._SY425_.jpg"
  },
  {
    title: "Uma Breve História do Tempo",
    author: "Stephen Hawking",
    favorite: true,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/61AaXcdHXKS._SY425_.jpg"
  },
  {
    title: "O Universo Numa Casca de Noz",
    author: "Stephen Hawking",
    favorite: false,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/51NYAYjPGYL._SY385_.jpg"
  },

  {
    title: "Principia",
    author: "Isaac Newton",
    favorite: false,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81Aq-q9aUeL._SY425_.jpg"
  },

  {
    title: "A Origem das Espécies: E a seleção natural",
    author: " Charles Darwin",
    favorite: false,
    genre: {
      id: '5',
      value: 'Divulgação Científica',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/71Au3i9QQyL._SY466_.jpg"
  },

  // FILOSOFIA

   {
    title: "Discurso do Método",
    author: "René Descartes",
    favorite: false,
    genre: {
      id: '6',
      value: 'Filosofia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/51Gd4dnriLL._SY445_SX342_PQ80_.jpg"
  },

  {
    title: "Pensamentos",
    author: "Blase Pascal",
    favorite: false,
    genre: {
      id: '6',
      value: 'Filosofia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81HPvZ1ME9L._SY522_.jpg"
  },

  {
    title: "Elogia da Loucura",
    author: "Erasmo de Rotterdam",
    favorite: false,
    genre: {
      id: '6',
      value: 'Filosofia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81JAmjiTMhL._SY466_.jpg"
  },

  {
    title: "Além do bem e do mal",
    author: "Friedrich Nietzsche",
    favorite: false,
    genre: {
      id: '6',
      value: 'Filosofia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/810FxsDvggL._SY466_.jpg"
  },

  {
    title: "Assim falou Zaratustra",
    author: "Friedrich Nietzsche",
    favorite: false,
    genre: {
      id: '6',
      value: 'Filosofia',
      books: []
    },
    image: "https://m.media-amazon.com/images/I/81K5xRhewvL._SY466_.jpg"
  },

  //https://m.media-amazon.com/images/I/81K5xRhewvL._SY466_.jpg
];



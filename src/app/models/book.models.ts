//criar interface que represente o livro
export interface BookDto  {
  title: string;
  author: string;
  image?: string;
  favorite?: boolean;
  genre: GenreDto;
}

export interface GenreDto {
  id: string;
  value: string;
  books: BookDto[];
}

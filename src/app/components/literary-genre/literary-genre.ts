import { Component, input } from '@angular/core';

import { Book } from '../book/book';
import { BookDto } from '../../models/book.models';

@Component({
  selector: 'app-literary-genre',
  imports: [Book],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.scss'
})
export class LiteraryGenre {
  public listBooks = input.required<BookDto[]>();
}

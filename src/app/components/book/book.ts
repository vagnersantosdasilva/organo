import { Component, input } from '@angular/core';
import { BookDto } from '../../models/book.models';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book {

  book = input.required<BookDto>();

  changeFavoriteStatus() {
    this.book().favorite = !this.book().favorite;
  }
}

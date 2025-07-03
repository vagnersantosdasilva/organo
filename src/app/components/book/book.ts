import { Component, input } from '@angular/core';
import { BookDto } from '../../models/book.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book {

  book = input.required<BookDto>();

  changeFavoriteStatus() {
    this.book().favorite = !this.book().favorite;
  }

  getClass(genreId: string): string {
    switch (genreId) {
      case '1': return 'info';
      case '2': return 'success';
      case '3': return 'warning';
      case '4': return 'danger';
      case '5': return 'secondary';
      case '6': return 'info';
      case '7': return 'success';
      default: return 'book--default';
    }
  }
}

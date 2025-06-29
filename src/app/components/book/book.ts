import { Component, Input } from '@angular/core';
import { BookDto } from '../../models/book.models';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book {

  @Input () book : BookDto = {
    title: 'O Senhor dos Anéis',
    authorship: 'J.R.R. Tolkien',
    image: 'assets/sem-livros.png',
    favorite: false
  }

  changeFavoriteStatus() {
    this.book.favorite = !this.book.favorite;
  }
}

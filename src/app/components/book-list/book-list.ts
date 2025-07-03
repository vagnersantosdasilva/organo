import { BookListByGenre } from './../../models/book.models';
import { Component, inject, Inject, Input } from '@angular/core';
import { GenreDto } from '../../models/book.models';
import { BookService } from '../../services/book-mock-service';
import { LiteraryGenre } from '../literary-genre/literary-genre';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [LiteraryGenre, CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {


  public booksGroupedByGenre: BookListByGenre[] = [];

  private service = inject(BookService);

  ngOnInit() {
    this.booksGroupedByGenre = this.service.getBooksGroupedByGenre();
    console.log(this.booksGroupedByGenre);

  }

  public getClass(genreId: string): string {

    const classMap: { [key: string]: string } = {
      '1': 'info',
      '2': 'success',
      '3': 'warning',
      '4': 'danger',
      '5': 'secondary',
      '6': 'info'

    };


    const possibleClasses = [
      'genre info',
      'genre danger',
      'genre warning',
      'genre success',
      'genre secondary'
    ];


    if (classMap[genreId]) {
      return classMap[genreId];
    } else {

     return this.getRandomClass(possibleClasses);
    }
  }

  public getTextClass(genreId: string): string {
    // Mapeia cada genreId para uma classe de cor
    const classMap: { [key: string]: string } = {
      '1': 'text-info',
      '2': 'text-success',
      '3': 'text-warning',
      '4': 'text-danger',
      '5': 'text-secondary',
      '6': 'text-info'
    };

    // Lista de todas as classes possíveis
    const possibleClasses = [
      'text-info',
      'text-danger',
      'text-warning',
      'text-success',
      'text-secondary'
    ];


    if (classMap[genreId]) {
      return classMap[genreId];
    } else {

      return this.getRandomClass(possibleClasses);
    }
  }

  private getRandomClass(possibleClasses: string[]): string {
    const randomIndex = Math.floor(Math.random() * possibleClasses.length);
    return possibleClasses[randomIndex];
  }


}

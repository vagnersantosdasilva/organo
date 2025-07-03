import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Book } from "./components/book/book";
import { BookList } from "./components/book-list/book-list";

@Component({
  selector: 'app-root',
  imports: [Header, Footer,  BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'organo';
}

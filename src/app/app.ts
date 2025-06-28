import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Book } from "./components/book/book";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Book],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'organo';
}

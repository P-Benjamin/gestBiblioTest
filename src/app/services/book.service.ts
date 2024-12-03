import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookSubject = new BehaviorSubject<Book[]>([
    { id : 1, titre : 'Angular Mastery', auteur : "John Doe", prix : 30, dateParution : new Date ('2023-01-01') }
  ])

  books$ = this.bookSubject.asObservable();

  getBooks() : Book[] {
    return this.bookSubject.value;
  }

  addBook (book : Book ) : void {
    const books = this.bookSubject.value;
    this.bookSubject.next([...books, { ...book, id : books.length + 1 }]) ;
  }

  deleteBook (id : number) : void {
    const books = this.bookSubject.value.filter((book) => {book.id ! = id } );
    this.bookSubject.next(books)
  }
}

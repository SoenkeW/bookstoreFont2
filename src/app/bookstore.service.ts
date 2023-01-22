import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";
@Injectable({
  providedIn: 'root'
})
export class BookstoreService{
  constructor(private http:HttpClient) {
  }
  getBooksFromServer():Observable<any>{
    return this.http.get<any>("http://localhost:8080/bookstore")

  }

  addBookToServer(book: Book):Observable<any>{
    return this.http.post<any>("http://localhost:8080/bookstore", book)
  }
}

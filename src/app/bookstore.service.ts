import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BookstoreService{
  constructor(private _http:HttpClient) {
  }
  getBooksFromServer():Observable<any>{
    return this._http.get<any>("http://localhost:8080/bookstore")
  }
  addBookFormSubmit():Observable<any>{
    return this._http.post("http://localhost:8080/bookstore", "any")
  }
}

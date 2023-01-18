import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../book";
import {BookstoreService} from "../bookstore.service";

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private _service: BookstoreService, private _route:Router) {
  }
  ngOnInit(): void {
    this.getbooks();
  }
  getbooks(){
    this._service.getBooksFromServer().subscribe(
      data => this.books =data,
    )
  }
  RedirectToAddBook(){
    this._route.navigate(['/addbook'])
  }
}

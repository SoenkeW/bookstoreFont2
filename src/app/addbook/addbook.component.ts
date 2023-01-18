import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../book";
import {BookstoreService} from "../bookstore.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{
  book: Book = new Book();
  constructor(private _service: BookstoreService, private _route:Router) { }



  public addBookFormSubmit(){
  this._service.addBookToServer(this.book).subscribe();
  this._route.navigate(['/viewbooks']);
  }

  ngOnInit(): void {
  }
}

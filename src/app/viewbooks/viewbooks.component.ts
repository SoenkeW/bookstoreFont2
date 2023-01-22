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

  constructor(private service: BookstoreService, private route:Router) {
  }
  ngOnInit(): void {
    this.getbooks();
  }
  getbooks(){
    this.service.getBooksFromServer().subscribe(
      data => this.books =data,
    )
  }

  RedirectToAddBook(){
    this.route.navigate(['/addbook',]);
  }
}

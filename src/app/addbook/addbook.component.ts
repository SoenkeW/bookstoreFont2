import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../book";
import {BookstoreService} from "../bookstore.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{
  book: Book = new Book();
  constructor(private service: BookstoreService, private route:Router) { }



  public addBookFormSubmit(){
    this.service.addBookToServer(this.book).subscribe();
  this.route.navigate(['/viewbooks']);
  }

  ngOnInit(): void {
  }
}

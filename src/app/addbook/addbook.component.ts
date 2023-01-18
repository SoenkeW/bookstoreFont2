import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../book";
import {BookstoreService} from "../bookstore.service";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{

  constructor(private _service: BookstoreService, private _route:Router) { }

  ngOnInit(): void {

  }

  addBookFormSubmit(){

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private book:BooksService,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  Logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/adminlogin")
    console.log("Logout Successfully..!!!");
  }
}

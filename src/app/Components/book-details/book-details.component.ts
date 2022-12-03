import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() recieveBookList: any;
  BookList=[]
  Book:any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
 
  constructor( private book:BooksService,private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((response:any)=>{
      this.Book = response;
    })
  }
  // getAllBook(){
  //   this.book.getAllBook().subscribe((res:any)=>{
  //     console.log(res);
  //     this.BookList=res.result;
  //     console.log(this.BookList);
  //     })
  // }
}

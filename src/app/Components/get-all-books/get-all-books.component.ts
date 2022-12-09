import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  @Input() recieveBookList: any;


  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  BookList=[]
  constructor(private book:BooksService) { }

  ngOnInit(): void {
    // console.log(this.recieveBookList)
    this.getAllBook();
  }

  getAllBook(){
    this.book.getAllBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  BookList=[]
  constructor(private book:BooksService) { }

  ngOnInit(): void {
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

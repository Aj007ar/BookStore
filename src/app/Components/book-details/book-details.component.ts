import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() recieveBookList: any;
  @Output() RefreshEvent = new EventEmitter<string>();
  BookList = []
  Book: any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity: any
  price: any;
  _id: any;
  array: any;
  Feedback = [];
  BookId: any;
  // message:any;
  constructor(private book: BooksService, private dataService: DataService, private router: Router, private snackbar: MatSnackBar) {
    // localStorage.getItem('BookId')
  }

  ngOnInit(): void {
    // this.BookId = localStorage.getItem("BookId");
    // console.log(this.BookId);
    this.dataService.getBookDetails.subscribe((response: any) => {
      this.Book = response;
      // this.comment();
    })
  }
  cart() {
    let Book = {
      product_id: this.Book._id,
    }
    console.log(Book)
    this.book.addCart(Book).subscribe((res: any) => {
      console.log(res)
      this.RefreshEvent.emit(res)
    })
  }
  wish() {
    let Book = {
      product_id: this.Book._id,
    }
    console.log(Book)
    this.book.addWish(Book).subscribe((res: any) => {
      console.log(res)
      this.RefreshEvent.emit(res)
    })
  }
  openSnackbar(message: any, action: any) {
    this.snackbar.open(message, action)
  }
  // comment() {
  //   let Book = {
  //     product_id: this.Book._id,
  //   }
  //   console.log(Book)
  //   this.book.getComment(Book).subscribe((res: any) => {
  //     console.log(res)
  //     this.Feedback = res.result;
  //     console.log(this.Feedback);
  //   })
  // }
}

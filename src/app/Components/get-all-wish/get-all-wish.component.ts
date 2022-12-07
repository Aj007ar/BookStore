import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-get-all-wish',
  templateUrl: './get-all-wish.component.html',
  styleUrls: ['./get-all-wish.component.scss']
})
export class GetAllWishComponent implements OnInit {
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
    this.getWishBook();
  }
  getWishBook(){
    this.book.getWishBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
}

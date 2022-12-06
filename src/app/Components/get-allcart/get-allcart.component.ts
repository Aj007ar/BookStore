import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-get-allcart',
  templateUrl: './get-allcart.component.html',
  styleUrls: ['./get-allcart.component.scss']
})
export class GetAllcartComponent implements OnInit {

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
    this.getCartBook();
  }

  getCartBook(){
    this.book.getCartBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }

}

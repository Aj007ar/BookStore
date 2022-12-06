import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() recieveBookList: any;
  BookList=[]
  Book:any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  _id:any;
  length:any;
  isShow= false;

  constructor(private dataService:DataService,private book:BooksService) { }

  ngOnInit(): void {
    console.log(this.recieveBookList)
  }
  deleteItem(){
    let Book={
      cartItem_id: this.Book._id,
    }
    console.log(Book)
    this.book.removeItem(Book).subscribe((res:any)=>{
      console.log(res)
    })
  }
  Show() {
    this.isShow = true;
  }
}

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
  fullName:any
  isShow= false;
  address= true;
  placeorder= true;
  cont=true;
  summary=true;

  constructor(private dataService:DataService,private book:BooksService) { }
  
  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((response:any)=>{
      this.Book = response;
    })
    // console.log(this.recieveBookList)
  }
  deleteItem(Book:any){

    console.log(Book)
    this.book.removeItem(Book).subscribe((res:any)=>{
      console.log(res)
    })
  }


  addItem(){
    let count={
      quantity:1
    }
    console.log(count)
    this.book.quantity(this.Book._id,count).subscribe((res:any)=>{
      console.log(res)
    })
  }
  addressBar() {
    this.address = false
    this.placeorder = false
  }
  continueBar() {
    this.summary = false
    this.cont = false
  }
}

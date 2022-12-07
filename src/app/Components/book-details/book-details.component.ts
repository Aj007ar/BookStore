import { Component, Input, OnInit } from '@angular/core';
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
  BookList=[]
  Book:any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  _id:any;
 
  constructor( private book:BooksService,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((response:any)=>{
      this.Book = response;
    })
  }
  cart(){
    let Book={
      product_id: this.Book._id,
    }
    console.log(Book)
    this.book.addCart(Book).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl('/home/mycart') 
    })
  }
  wish(){
    let Book={
      product_id: this.Book._id,
    }
    console.log(Book)
    this.book.addWish(Book).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl('/home/wishlist')
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-get-all-orders',
  templateUrl: './get-all-orders.component.html',
  styleUrls: ['./get-all-orders.component.scss']
})
export class GetAllOrdersComponent implements OnInit {
  @Input() recieveOrderList: any;
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  product_name:any;
  BookList=[]
  constructor(private book:BooksService) { }

  ngOnInit(): void {
    this.getAllOrder();
  }
  getAllOrder(){
    this.book.getAllOrder().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
}

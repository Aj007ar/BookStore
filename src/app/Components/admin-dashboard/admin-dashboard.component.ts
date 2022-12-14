import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
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
  totalLength:any;
  page:number=1;
  constructor(private book:BooksService,private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res:any)=>{
      console.log(res)

    })
    console.log(this.recieveOrderList)
  }
  // getAllOrder(){
  //   this.book.getAllOrder().subscribe((res:any)=>{
  //     console.log(res);
  //     this.BookList=res.result;
  //     console.log(this.BookList);
  //     })
  // }
}

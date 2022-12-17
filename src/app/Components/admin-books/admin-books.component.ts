import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';
import { AddbookComponent } from '../addbook/addbook.component';
import {MatDialog} from '@angular/material/dialog';
import { UpdatebookComponent } from '../updatebook/updatebook.component';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {
  @Input() recieveAdminBook: any;
  BookList=[]
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  Search='';
  Feedback=[];
  constructor(public dialog:MatDialog,private router:Router,private book:BooksService,private dataService:DataService) { }

  totalLength:any;
  page:number=1;

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res:any)=>{
      console.log(res)
      this.Search=res;
      // this.totalLength=res.result.length;
      
    })
    console.log(this.recieveAdminBook)
    
  }
  toBookDetails(id: any) {
    this.id = id;
    this.router.navigate(['/home/book-details'], { state: { value: id } })
  }
  lowtohigh(){
    this.recieveAdminBook= this.recieveAdminBook.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);//low and high as argument pass in this sort the book from price 
    }
  hightolow(){
    this.recieveAdminBook= this.recieveAdminBook.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.recieveAdminBook.reverse();
  }
  updateDialog(note:any){
    const dialogRef=this.dialog.open(UpdatebookComponent,{
      width:'40%',
      height:'auto',
      data:note,

    });
    dialogRef.afterClosed().subscribe(reponse=>{
      
      this.bookName;
      this.author;
      this.description;
      this.quantity;
      this.price;
      this.discountPrice;
      console.log('The dialog was closed',reponse);
    })
  }
  deleteItem(Book:any) {

    console.log(Book)
    this.book.deleteBook(Book).subscribe((res: any) => {
      console.log(res)
    })
  }

  addDialog(){
    const dialogRef=this.dialog.open(AddbookComponent,{
      width:'40%',
      height:'auto',
    });
    dialogRef.afterClosed().subscribe(reponse=>{
      
      this.bookName;
      this.author;
      this.description;
      this.quantity;
      this.price;
      this.discountPrice;
      console.log('The dialog was closed',reponse);
    })
  }
}

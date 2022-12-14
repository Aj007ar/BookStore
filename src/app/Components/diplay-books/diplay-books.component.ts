import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/BookService/books.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-diplay-books',
  templateUrl: './diplay-books.component.html',
  styleUrls: ['./diplay-books.component.scss']
})
export class DiplayBooksComponent implements OnInit {
  @Input() recieveBookList: any;
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
  constructor(private router:Router,private book:BooksService,private dataService:DataService) { }

  totalLength:any;
  page:number=1;

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res:any)=>{
      console.log(res)
      this.Search=res;
      // this.totalLength=res.result.length;
      
    })
    console.log(this.recieveBookList)
    
  }
  toBookDetails(id: any) {
    this.id = id;
    this.router.navigate(['/home/book-details'], { state: { value: id } })
  }
  onclick(book:any){
    
    this.dataService.SendBookDetails(book)
    this.router.navigateByUrl('/home/book-details')   
    // localStorage.setItem('BookId',book.result.product_id)
  }
  lowtohigh(){
    this.recieveBookList= this.recieveBookList.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);//low and high as argument pass in this sort the book from price 
    }
  hightolow(){
    this.recieveBookList= this.recieveBookList.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.recieveBookList.reverse();
  }
  // comment() {
  //   let Book = {
  //     product_id: this.recieveBookList._id,
  //   }
  //   console.log(Book)
  //   this.book.getComment(Book).subscribe((res: any) => {
  //     console.log(res)
  //     this.Feedback=res.result.product_id;
  //     console.log(this.Feedback);
  //   })
  // }
}

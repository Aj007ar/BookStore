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
  // BookList:any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  Search='';
  constructor(private router:Router,private book:BooksService,private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res:any)=>{
      console.log(res)
      this.Search=res;
    })
    console.log(this.recieveBookList)
    
  }
  toBookDetails(id: any) {
    this.id = id;
    this.router.navigate(['/home/book-details'], { state: { value: id } })
  }
  onclick(book: any){
    this.dataService.SendBookDetails(book)
    this.router.navigateByUrl('/home/book-details')   
    
  }
}

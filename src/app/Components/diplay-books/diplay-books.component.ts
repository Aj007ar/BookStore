import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplay-books',
  templateUrl: './diplay-books.component.html',
  styleUrls: ['./diplay-books.component.scss']
})
export class DiplayBooksComponent implements OnInit {
  @Input() recieveBookList: any;

  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.recieveBookList)
  }

}

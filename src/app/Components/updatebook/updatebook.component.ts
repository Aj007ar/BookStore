import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.scss']
})
export class UpdatebookComponent implements OnInit {
  UpdateForm!: FormGroup
  submitted = false
  book: any;
  bookName: any
  author: any
  description: any
  quantity: any
  price: any
  discountPrice: any
  bookid: any;
  constructor(private bookService:BooksService,private router: Router,  private formBuilder: FormBuilder,public dialogRef: MatDialogRef<UpdatebookComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.bookName = data.bookName
    this.author = data.author
    this.description = data.description
    this.quantity = data.quantity
    this.price = data.price
    this.discountPrice = data.discountPrice
    this.bookid = data._id
    console.log(data);
   }
   onNoClick(){
    this.dialogRef.close();
   }
  ngOnInit(): void {
    this.book = this.data.element;
  }
  updateBook() {
    this.submitted = true
    let reqData = {
      bookName: this.bookName,
      author: this.author,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      discountPrice: this.discountPrice,
    }

    this.bookService.UpdateBook(this.bookid,reqData).subscribe((result: any) => {
      console.log(result);
      
    })
    this.dialogRef.close()
  } 
}

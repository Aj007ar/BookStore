import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/BookService/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  Addnewbookform!: FormGroup
  submitted = false;
  book: any;
  bookName: any
  author: any
  description: any
  quantity: any
  price: any
  discountPrice: any
  bookid: any;
  constructor(private bookService:BooksService,private router: Router,  private formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddbookComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {
  }
   onNoClick(){
    this.dialogRef.close();
   }
  ngOnInit(): void {
    this.Addnewbookform = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
     
    });
  }
  addnewbook() {
    this.submitted = true;

    if (this.Addnewbookform.valid) {
      let reqData = {
        bookName: this.Addnewbookform.value.bookName,
        author: this.Addnewbookform.value.author,
        description: this.Addnewbookform.value.description,
        quantity: this.Addnewbookform.value.quantity,
        price: this.Addnewbookform.value.price,
        discountPrice: this.Addnewbookform.value.discountPrice
      }
      this.bookService.AddBook(reqData).subscribe((response:any) => {
        console.log(response);
      })

    }
  }
}

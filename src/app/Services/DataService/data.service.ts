import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BookDetails = new BehaviorSubject([]);
  getBookDetails = this.BookDetails.asObservable();
  
  constructor() { }

  SendBookDetails(book:any){
    this.BookDetails.next(book)
  }
}

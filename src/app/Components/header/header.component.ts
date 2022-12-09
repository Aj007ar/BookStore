import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  content:any;
  constructor(private router:Router,private dataService:DataService) { 
    this.content=localStorage.getItem('badgeCount')
  }
  
  ngOnInit(): void {
  }
  Logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
    console.log("Logout Successfully..!!!");
  }
  cart()
  {
    this.router.navigateByUrl("/home/mycart")
  }
  searchBook(event:any){
    this.dataService.SendBookDetails(event.target.value)
  }
  wish()
  {
    this.router.navigateByUrl("/home/wishlist")
  }
}

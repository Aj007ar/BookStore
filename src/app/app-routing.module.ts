import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminSignupComponent } from './Components/admin-signup/admin-signup.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { DiplayBooksComponent } from './Components/diplay-books/diplay-books.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { GetAllWishComponent } from './Components/get-all-wish/get-all-wish.component';
import { GetAllcartComponent } from './Components/get-allcart/get-allcart.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AuthenticationGuard } from './Guard/authentication.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'adminsignup', component:AdminSignupComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'home', component:HomeComponent,canActivate:[AuthenticationGuard],
  children:[
  {path: 'books', component:GetAllBooksComponent},
  {path: 'book-details', component:BookDetailsComponent},
  {path: 'mycart', component:GetAllcartComponent},
  {path: 'wishlist', component:GetAllWishComponent},
  {path: 'orderplaced', component:PlaceOrderComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { DiplayBooksComponent } from './Components/diplay-books/diplay-books.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AuthenticationGuard } from './Guard/authentication.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'home', component:HomeComponent,canActivate:[AuthenticationGuard],
  children:[
  {path: 'books', component:GetAllBooksComponent},
  {path: 'book-details', component:BookDetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

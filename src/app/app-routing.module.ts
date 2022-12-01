import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplayBooksComponent } from './Components/diplay-books/diplay-books.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'home', component:HomeComponent,
  children:[
  {path: 'books', component:GetAllBooksComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

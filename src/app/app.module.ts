import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './Components/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DiplayBooksComponent } from './Components/diplay-books/diplay-books.component'
import { MatMenuModule } from '@angular/material/menu';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component'
import { MatCardModule } from '@angular/material/card';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component'
import { AuthguardService } from './Services/Auth-Guard/authguard.service';
import { CartComponent } from './Components/cart/cart.component';
import { GetAllcartComponent } from './Components/get-allcart/get-allcart.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { GetAllWishComponent } from './Components/get-all-wish/get-all-wish.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { MatSelectModule } from '@angular/material/select';
import { PlaceOrderComponent } from './Components/place-order/place-order.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminSignupComponent } from './Components/admin-signup/admin-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    DiplayBooksComponent,
    GetAllBooksComponent,
    BookDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    GetAllcartComponent,
    FilterPipe,
    GetAllWishComponent,
    WishListComponent,
    PlaceOrderComponent,
    AdminLoginComponent,
    AdminSignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

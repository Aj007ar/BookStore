import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

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
    FooterComponent
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
    MatCardModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

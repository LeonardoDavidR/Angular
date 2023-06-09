import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'
import {HttpClientModule} from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { RefPipe } from './pipes/ref.pipe';
import { CardComponent } from './component/card/card.component';
import { BooksformComponent } from './pages/booksform/booksform.component';
import { BooksmodifComponent } from './pages/booksmodif/booksmodif.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { Respuesta } from './models/respuesta';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    RefPipe,
    CardComponent,
    BooksformComponent,
    BooksmodifComponent,
    LoginComponent,
    FormLoginComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksformComponent } from './pages/booksform/booksform.component';
import { BooksmodifComponent } from './pages/booksmodif/booksmodif.component';
const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path : "form-register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "books" , component: BooksComponent},
  {path: "addBook",  component : BooksformComponent},
  {path : "modifBook" , component : BooksmodifComponent},
  {path: "**" , component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

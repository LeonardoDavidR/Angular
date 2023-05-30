import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Books } from 'src/app/models/books';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booksmodif',
  templateUrl: './booksmodif.component.html',
  styleUrls: ['./booksmodif.component.css']
})
export class BooksmodifComponent {

  constructor(public bookService : BooksService,
              public route : Router,
             private toastr : ToastrService
              ){

  }

  editar(newID: HTMLInputElement, newIdUser: HTMLInputElement, newTitle: HTMLInputElement, newType: HTMLInputElement,newAuthor: HTMLInputElement,
    newPrice: HTMLInputElement, newPhoto: HTMLInputElement){

      let autor = newAuthor;
      let idUs = newIdUser;
      let genre = newType;
      let idB = newID;
      let title1 = newTitle;
      let price1 = newPrice;
      let photo1 = newPhoto;

      let books: Books = {
        id_book: parseInt(idB.value),
        id_user: parseInt(idUs.value),
        title: title1.value,
        type: genre.value,
        author: autor.value,
        price: parseInt(price1.value),
        photo: photo1.value
      }
    this.bookService.edit(books)
    this.route.navigateByUrl('/books')
    
    if(this.bookService.edit(books)){
    this.toastr.success("Se ha modificado correctamente")
    }
    else{
      this.toastr.error("No se ha modificado")

    }
  }
}

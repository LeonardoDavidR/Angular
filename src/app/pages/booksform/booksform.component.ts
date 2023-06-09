import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { Books } from 'src/app/models/books';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-booksform',
  templateUrl: './booksform.component.html',
  styleUrls: ['./booksform.component.css']
})
export class BooksformComponent {
  constructor(public bookService : BooksService,
              public route : Router,
              public toastr : ToastrService
              ){}
  
  
  public agregarLibro(newID: HTMLInputElement, newIdUser: HTMLInputElement, newTitle: HTMLInputElement, newType: HTMLInputElement,newAuthor: HTMLInputElement,
    newPrice: HTMLInputElement, newPhoto: HTMLInputElement): void {
    




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
   
    this.bookService.add(books).subscribe((respuesta:Respuesta)=>{
      if(respuesta.data){
        this.toastr.success("Se ha añadido correctamente")
      }
    })




    console.log("añadido")
    this.route.navigateByUrl('/books')
    
    // let newB :Books = new Books()
  }
}

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public myArrBook2 : Books[]

  constructor(public bookService: BooksService,
              private toastr : ToastrService
              ) {
    
    this.bookService.getAll().subscribe((data : Object)=>{
     this.myArrBook2 = data as Books[]
    })

  }



  rellenado (){
    this.bookService.getAll().subscribe((respuesta : Respuesta)=>{
      console.log(respuesta);
      if(respuesta.error)
      this.toastr.warning("error")
      else{
        this.bookService
      }
    })
  }
  


  borrar(noBook: Books) {
    this.bookService.delete(noBook.id_book).subscribe((respuesta : Respuesta)=>{
      this.myArrBook2 = this.myArrBook2.filter(books => books.id_book !== noBook.id_book)
      console.log(respuesta);
      if (respuesta.data) {
        this.toastr.warning("borrado")
      }
      
    })

  }

  encontrado(iD: HTMLInputElement) {
    
  this.bookService.getOne(parseInt(iD.value)).subscribe((book : Books)=>{
    if(book){
      this.myArrBook2 = [book]
      this.toastr.success("libro encontrado")
    }
    else{
      // this.myArrBook2 = this.bookService.getAll()
      this.bookService.getAll().subscribe((data : Object)=>{
        this.myArrBook2 = data as Books[]
       })
      this.toastr.error("No se ha encontrado el libro")
    }
  
  
  })
  
    console.log(iD.value)
    console.log("jaja encontrado xd")
    
  }

}

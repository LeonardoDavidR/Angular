import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public myArrBook2: Books[]
  constructor(public bookService: BooksService,
              private toastr : ToastrService
              ) {
    this.myArrBook2 = this.bookService.getAll()

  }

  borrar(noBook: Books) {
    let borrado = this.bookService.delete(noBook.id_book)
    if (borrado) {
      this.myArrBook2 = this.bookService.getAll()
      this.toastr.warning("borrado")
    }
  }

  encontrado(iD: HTMLInputElement) {
    
    let find = this.bookService.getOne(parseInt(iD.value))
    if(find){
      this.myArrBook2 = [find]
      this.toastr.success("libro encontrado")
    }
    else{
      this.myArrBook2 = this.bookService.getAll()
      this.toastr.error("No se ha encontrado el libro")
    }
    
    console.log(iD.value)
    console.log("jaja encontrado xd")
    
  }

}

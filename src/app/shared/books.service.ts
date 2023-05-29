import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private myArrBook: Books[]
  constructor() {

    this.myArrBook = [
      new Books(132, 0, "El silencio de los corderos", "Thriller", "Thomas Harris", 23, "https://m.media-amazon.com/images/I/81uiWyjF0AL.jpg"),
      new Books(145, 0, "Veinte mil leguas bajo el mar", "Fantasia", "Julio verne", 17, "https://tienda.rba.es/media/catalog/product/h/2/h273_julioverne_2021_1.jpg"),
      new Books(406, 0, "El archivo de las tormentas", "Fantasy", "Brandon Sanderson", 27, "https://kbimages1-a.akamaihd.net/784a8bdc-99cf-49a7-9f59-8699249f5976/1200/1200/False/juramentada-el-archivo-de-las-tormentas-3-1.jpg"),
    ]
  }



  getAll(): Books[] {
    return this.myArrBook;
  }

  getOne(id_libro: number): Books {

    return this.myArrBook.find(book => book.id_book == id_libro)
    
  }

  add(book: Books): void {
    this.myArrBook.push(book);
  }
  edit(book: Books): boolean{
    
   let index = this.myArrBook.findIndex(books => books.id_book === book.id_book )
   if(index != -1) {
      this.myArrBook[index] = book;
  
    return true};
    
  }

  delete(id_book: number): boolean {

    let filtrado = this.myArrBook.filter(book1 => book1.id_book !== id_book);
    this.myArrBook = filtrado;

    return true;
  }
}

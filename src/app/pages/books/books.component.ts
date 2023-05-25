import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public booksCollection: Books[]

  constructor() {
    this.booksCollection = [
      new Books(132, 0, "El silencio de los corderos", "Thriller", "Thomas Harris", 23, "https://m.media-amazon.com/images/I/81uiWyjF0AL.jpg"),
      new Books(145, 0, "Veinte mil leguas bajo el mar", "Fantasia", "Julio verne", 17, "https://tienda.rba.es/media/catalog/product/h/2/h273_julioverne_2021_1.jpg"),
      new Books(406, 0, "El archivo de las tormentas", "Fantasy", "Brandon Sanderson", 27, "https://kbimages1-a.akamaihd.net/784a8bdc-99cf-49a7-9f59-8699249f5976/1200/1200/False/juramentada-el-archivo-de-las-tormentas-3-1.jpg"),

    ]

  }

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
    this.booksCollection.push(books)
    
    // let newB :Books = new Books()
  }
  eliminarLibroFather(noBook : Books):void{
    // for(let i = 0 ; i < this.booksCollection.length;i ++){
    //    if(this.booksCollection[i].id_book != 0){
    //   delete this.booksCollection[i]
    // }
    // }
    this.booksCollection.filter(function (book){
      //  noBook.id_book == book.id_book
      book.id_book != noBook.id_book
      
       
    })
    // let indice = this.booksCollection.lastIndexOf(booksFather);
    // this.booksCollection.splice(indice,1)

    
   
  }
  

}

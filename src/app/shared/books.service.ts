import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // public myArrBook: Books[]
  private url = "http://localhost:3000/book"
  private url2 = "http://localhost:3000/book/:id_book" 
  constructor(private http : HttpClient) {

    // this.myArrBook = [
    //   new Books(132, 0, "El silencio de los corderos", "Thriller", "Thomas Harris", 23, "https://m.media-amazon.com/images/I/81uiWyjF0AL.jpg"),
    //   new Books(145, 0, "Veinte mil leguas bajo el mar", "Fantasia", "Julio verne", 17, "https://tienda.rba.es/media/catalog/product/h/2/h273_julioverne_2021_1.jpg"),
    //   new Books(406, 0, "El archivo de las tormentas", "Fantasy", "Brandon Sanderson", 27, "https://kbimages1-a.akamaihd.net/784a8bdc-99cf-49a7-9f59-8699249f5976/1200/1200/False/juramentada-el-archivo-de-las-tormentas-3-1.jpg"),
    // ]
  }



  getAll(): Observable <object>{
    return this.http.get<Books[]>(this.url);
  }

  getOne(id_libro: number): Observable <object> {

    return this.http.get(this.url+"/"+id_libro);
    
  }

  add(book: Books):Observable <object> {
    return this.http.post(this.url, book);
  }
  edit(book: Books): Observable <object>{
    
    return this.http.put(this.url, book);
    
  }

  delete(id_book: number): Observable <object> {
    return this.http.delete(this.url+"/"+id_book)
  }

}

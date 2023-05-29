import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() booksFather: Books;
  @Output() eliminarLibro = new EventEmitter<Books>();
  @Input() esPar : boolean
  constructor(){};

  
 
  eliminar(){
    console.log("eliminado perro xd");
    
     this.eliminarLibro.emit(this.booksFather);
   
  }
  
  ngOnInit():void {
   
  }
}

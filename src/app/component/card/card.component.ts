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

  

  eliminar():void{
    console.log("eliminado perro xd");
    // let eliminar_1 = this.delete()
    this.eliminarLibro.emit(this.booksFather);
    // for(let i = 0; i < this.booksFather.length ; i++){
    //       this.booksFather[i]
    // }
  }
  
  ngOnInit():void {

  }
}

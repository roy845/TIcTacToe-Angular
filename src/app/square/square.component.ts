import { Component,EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
 
  @Input () value:string;
  @Output() select = new EventEmitter<void>()

  constructor(){
    this.value = ''
  }

  onClick():void{
    this.select.emit()
  }

}

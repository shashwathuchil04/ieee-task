import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-Component',
  templateUrl: 'custom.html'
})
export class CustomComoponent {
  @Input() lng;
  @Input() lat;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {
   }
   sendMessage() {
     this.messageEvent.emit(this.lng)
   }

   ngOnchanges(){

   }
}

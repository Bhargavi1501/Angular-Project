import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contactuschild',
  templateUrl: './contactuschild.component.html',
  styleUrls: ['./contactuschild.component.css']
})
export class ContactuschildComponent {
  
  myinfo:string = "Hey parent how are you?";
  myNewMessage:string = "Message from child";

  @Output() infoEvent = new EventEmitter<string>
  
  sendData(){
    this.infoEvent.emit(this.myNewMessage);
  }

}

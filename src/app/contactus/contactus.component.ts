import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ContactuschildComponent } from '../contactuschild/contactuschild.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements AfterViewInit {

  notes:string;
  @ViewChild(ContactuschildComponent) myChild: any;

  ngAfterViewInit(): void {
    this.notes = this.myChild.myinfo;
  }
  receiveInfo(event:string){
    this.notes = event;
  }
}



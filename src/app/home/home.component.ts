import { Component } from '@angular/core';
import { Student } from 'src/student';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    course:string = "Angular Course";
    startDate:Date =  new Date();
    courseFee:number = 500;

    students:Array<Student> = [
      {name:"Ashok", gender:"male", course:"Angular"},
      {name:"Piyush", gender:"male", course:"React"},
      {name: "Sneha", gender:"female", course:"Angular"},
      {name:"Swapna", gender:"female", course:"React"}
    ] 
}

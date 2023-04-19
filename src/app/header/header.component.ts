import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = "Angular Learning Journey";

  navitems: Array<string> = ["home", "projects", "contactus", "assignments", "aboutus", "employee", "tests"];


}

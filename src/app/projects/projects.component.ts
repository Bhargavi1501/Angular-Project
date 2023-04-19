import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  targetAPI:string = "https://restcountries.com/v3.1/all";
  data:any;
  searchText:any = '';
  constructor(private httpClient: HttpClient){
    console.log(this.searchText)
  } 
  ngOnInit(){
    this.httpClient.get(this.targetAPI).subscribe(response => this.data = response);
    
  } 
 
}
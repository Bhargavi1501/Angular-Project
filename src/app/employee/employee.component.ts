import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employees:string = "https://dummy.restapiexample.com/api/v1/employees";
  employeeData:any;
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(): void {
    this.httpClient.get(this.employees).subscribe(response => {
      console.log(response)
      this.employeeData = response;
    });
  }

}

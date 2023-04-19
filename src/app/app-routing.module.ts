import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeComponent } from './employee/employee.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contactus', component:ContactusComponent},
  {path: 'assignments', component: AssignmentsComponent, children:[
    {path:'assignment1', component:Assignment1Component},
    {path:'assignment2', component:Assignment2Component},
    {path:'assignmnet3', component:Assignment3Component}
]},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'employee', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ExpertPipe } from './expert.pipe';
import { FormsModule } from '@angular/forms';
import { ContactuschildComponent } from './contactuschild/contactuschild.component';
import { EmployeeComponent } from './employee/employee.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MaincontentComponent,
    HomeComponent,
    ProjectsComponent,
    ContactusComponent,
    AssignmentsComponent,
    AboutusComponent,
    ExpertPipe,
    ContactuschildComponent,
    EmployeeComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { StudentDetailComponent } from './student-detail.component';
import { CoursesComponent } from './courses.component';
import { CartSelectComponent } from './cart-select.component';
import { HelpComponent } from './help.component';
import { InvalidRouteComponent } from './invalid-route.component';
import { CartSelectedListComponent } from './cart-selected-list.component';
import { CartSelectedCellComponent } from './cart-selected-cell.component';
import { CartSelectedGridComponent } from './cart-selected-grid.component';
import { CourseDetailComponent } from './course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    StudentDetailComponent,
    CoursesComponent,
    CartSelectComponent,
    HelpComponent,
    InvalidRouteComponent,
    CartSelectedListComponent,
    CartSelectedCellComponent,
    CartSelectedGridComponent,
    CourseDetailComponent
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

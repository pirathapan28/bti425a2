import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail.component';
import { CoursesComponent } from './courses.component';
import { CartSelectComponent } from './cart-select.component';
import { HelpComponent } from './help.component';
import { InvalidRouteComponent } from './invalid-route.component';
import { CourseDetailComponent } from './course-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'student/detail/:id', component: StudentDetailComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'cartSelect', component: CartSelectComponent},
  { path: 'help', component: HelpComponent},
  { path: 'invalidRoute', component: InvalidRouteComponent},
  { path: 'course/detail/:id', component: CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from "./data-model-manager.service";
import { Course } from "./data-model-class";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
  
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  course: Course;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {

    this.m.courseGetAll().subscribe(c => this.courses = c);
  }

}

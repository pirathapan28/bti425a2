import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { Course } from "./data-model-class";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;

  constructor(private m: DataModelManagerService, private route: ActivatedRoute) {
    this.course = new Course();
   }

  ngOnInit() {
    // Get the route parameter
    let id = this.route.snapshot.params['id'];
    this.m.coursetGetById(id).subscribe(u => this.course = u);
    
  }

}

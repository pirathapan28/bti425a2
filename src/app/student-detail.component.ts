import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { Student, Course } from "./data-model-class";
//import { Course } from "./data-model-class";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  // web service data
  student: Student;
  coursesPossibleBSD: Course[];
  coursesPossibleCPA: Course[];

  constructor(private m: DataModelManagerService, private route: ActivatedRoute) {
    this.student = new Student();
    this.coursesPossibleBSD = new Array();
    this.coursesPossibleCPA = new Array();
   }

  ngOnInit() {
        // Get the route parameter
        let id = this.route.snapshot.params['id'];
        this.m.studentGetById(id).subscribe(u => this.student = u);
        this.m.courseGetBSD().subscribe(c => this.coursesPossibleBSD = c);
        this.m.courseGetCPA().subscribe(c => this.coursesPossibleCPA = c);

  }
  ngOnDestroy() {
    this.m.student = this.student;
    this.m.coursesPossibleBSD = this.coursesPossibleBSD;
    this.m.coursesPossibleCPA = this.coursesPossibleCPA;
  }

}

import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from "./data-model-manager.service";
import { Student } from "./data-model-class";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  // web service data
  students: Student[];
  student: Student;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {
    this.m.studentGetAll().subscribe(s => this.students = s);
  }
}

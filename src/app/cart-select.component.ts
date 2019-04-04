import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { Student, Course, createStudent, createStudentResponse } from "./data-model-class";

@Component({
  selector: 'app-cart-select',
  templateUrl: './cart-select.component.html',
  styleUrls: ['./cart-select.component.css']
})
export class CartSelectComponent implements OnInit {
  student: Student;
  createNewStudent: createStudent;
  createNewStudentResult: createStudentResponse;
  coursesPossible: Course[];
  coursesPossibleBSD: Course[];
  coursesPossibleCPA: Course[];
  coursesMatched: Course[];
  coursesSelected: Course[];
  isSelected: Boolean;
  allCourses: Course[];
  coursesConfirmed: Course[];

  constructor(private m: DataModelManagerService, private router: Router) {
    this.student = new Student();
    this.createNewStudent = new createStudent();
    this.createNewStudentResult = new createStudentResponse();
    this.coursesPossible = new Array();
    this.coursesPossibleBSD = new Array();
    this.coursesPossibleCPA = new Array();
    this.coursesMatched = new Array();
    this.coursesSelected = new Array();
    
  }

  ngOnInit() {
    if(this.m.student == undefined) {
      this.router.navigate(['../students']);
    }
    
    this.student = this.m.student;
    this.coursesSelected = this.student.coursesTentative;

    if (this.student.academicProgram.match("BSD")) 
    {
      this.coursesPossible = this.m.coursesPossibleBSD;
      this.courseMatch();
    }
    else 
    {
      this.coursesPossible = this.m.coursesPossibleCPA;
      this.courseMatch();
    }  
  }

  courseMatch() : void {
    for(var i = 0; i < this.coursesPossible.length; i++)
    {
      if(this.coursesPossible[i].enrolTotal < 4)
      {
        for(var j = 0; j < this.student.credits.length; j++)
        {
          if(!this.student.credits[j].courseCode.match(this.coursesPossible[i].courseCode))
          {
            for(var k = 0; k < this.coursesPossible[i].prerequisite.length; k++) 
            {
             if(this.coursesPossible[i].prerequisite[k] == this.student.credits[j].courseCode) 
             {
               this.coursesPossible[i].classStart = this.coursesPossible[i].classStart.slice(0, this.coursesPossible[i].classStart.length - 3);
               this.coursesPossible[i].classEnd = this.coursesPossible[i].classEnd.slice(0, this.coursesPossible[i].classEnd.length - 3);
               this.coursesMatched.push(this.coursesPossible[i]);
             }
            }
          }
        }
      }
    }
  }

  isCourseSelected(course: Course) : Boolean {
    this.isSelected = false;
    for(let i = 0; i < this.coursesSelected.length; i++) {
      if((this.coursesSelected[i].courseId == course.courseId) && 
      (this.coursesSelected[i].termSectionId == course.termSectionId) &&
      (this.coursesSelected[i].section.match(course.section))) 
      {
        this.isSelected = true;
      }
    }
    return this.isSelected;
  }

  courseSelect(course: Course) : void {
    if(this.isCourseSelected(course)) {
      for(var i = 0; i < this.coursesSelected.length; i++){
        if ((this.coursesSelected[i].courseId == course.courseId) && 
          (this.coursesSelected[i].termSectionId == course.termSectionId) &&
          (this.coursesSelected[i].section.match(course.section))){
          this.coursesSelected.splice(i, 1);
        }
      }
    }
    else {
      this.coursesSelected.push(course);
    }
  }

  taskSaveCart() : void {
    this.createNewStudent = this.student;
    this.createNewStudent.coursesTentative = this.coursesSelected;
    if (this.coursesSelected.length != 0){
      this.student.message = "Cart saved";
    }
    this.m.cartSave(this.student._id, this.createNewStudent).subscribe(u => this.createNewStudentResult = u);
  }

  taskClear() : void {
    this.createNewStudent = this.student;
    this.createNewStudent.coursesTentative = new Array();
    this.coursesSelected = new Array();
    this.student.message = "Cleared";
    this.m.cartSave(this.student._id, this.createNewStudent).subscribe(u => this.createNewStudentResult = u);
  }

  confirmCart() : void {
    this.createNewStudent = this.student;
    this.createNewStudent.coursesConfirmed = this.coursesSelected;
    // window.alert(this.createNewStudent);
    if (this.coursesSelected.length != 0){
      this.student.message = "Confirmed";
    }
    this.m.cartConfirm(this.student._id, this.coursesSelected).subscribe(u => this.createNewStudentResult = u);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// Updated...
import { Observable, of } from 'rxjs';
// New...
import { catchError, tap } from "rxjs/operators";

import { Student, Course, createStudent, createStudentResponse} from "./data-model-class";
@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {

  constructor(private http: HttpClient) { }
  // URL to the example reqres.in web service
  //private url: string = "https://reqres.in/api/users";

  // Edit the base URL string to the web service
  private studentUrl: string = "https://rhubarb-crisp-45867.herokuapp.com/api/students";
  private courseUrl: string = "https://rhubarb-crisp-45867.herokuapp.com/api/courses";
  private courseBSD: string = "https://rhubarb-crisp-45867.herokuapp.com/api/bsdwinter2019";
  private courseCPA: string = "https://rhubarb-crisp-45867.herokuapp.com/api/cpawinter2019";

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Data service operations

  student: Student;
  coursesPossibleBSD: Course[];
  coursesPossibleCPA: Course[];
  coursesMatched: Course[];
  coursesSelected: Course[];

  // Get all
  studentGetAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentUrl}`);
  }

  // Get all
  courseGetAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.courseUrl}`);
  }

  // Get one
  studentGetById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.studentUrl}/${id}`);
  }

  // Get one
  coursetGetById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.courseUrl}/${id}`);
  }


  // Get all
  courseGetBSD(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.courseBSD}`);
  }
  
    // Get all
  courseGetCPA(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.courseCPA}`);
  }


  // Edit existing
  cartSave(id: string, newItem: createStudent): Observable<createStudentResponse> {
    return this.http.put<createStudentResponse>(`${this.studentUrl}/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: createStudentResponse) => console.log(`Edited item ${newItem}`)),
        catchError(this.handleError<createStudentResponse>('User edit'))
      );
  }

  // Edit existing
  cartConfirm(id: string, newItem: createStudent[]): Observable<any> {
    return this.http.put<any>(`${this.studentUrl}/${id}/cart/confirmed`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: any) => console.log(`Edited item ${newItem}`)),
        catchError(this.handleError<any>('User edit'))
      );
  }
    
}
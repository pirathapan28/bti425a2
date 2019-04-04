// import { NumberSymbol } from '@angular/common';

export class Student {
    _id: string;
    academicProgram: string;
    studentId: string;
    familyName: string;
    givenName: string;
    birthDate: string; 
    email: string;
    academicLevel: number;
    gpa: number;
    credits: Credits[];
    coursesTentative: Course[];
    coursesConfirmed: Course[];
    message: string;
}

class Credits {
    courseCode: string;
    courseName: string;
    termCompleted: string;
    gradeEarned: string;
}

export class Course{
    _id: string;
    courseId: number;
    term: string;
    academicProgram: string;
    level: number;
    prerequisite: [];
    courseCode: string;
    section: string;
    termSectionId: number;
    enrolCapacity: number;
    enrolTotal: number;
    room: string;
    roomCapacity: number;
    classStart: string;
    classEnd: string;
    classMon: string;
    classTue: string;
    classWed: string;
    classThu: string;
    classFri: string;
    dateStart: string;
    dateEnd: string;
    professor: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];
}
export class createStudent {
    _id: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];
}

export class createStudentResponse {
    _id?: string;
    coursesTentative: Course[];
    coursesConfirmed: Course[];
}


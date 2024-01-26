import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },{
      id: 2,
      title: 'TypeScript Fundamentals',
      description: 'Learn the fundamentals of TypeScript',
      percentComplete: 0,
      favorite: false
    },{
      id: 3,
      title: 'Intermediate Angular 13',
      description: 'Implement an Angular 13 App',
      percentComplete: 0,
      favorite: false
    }
  ];
  selectedCourse = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(id) {
    console.log('Deleting course with id', id);
  }

}

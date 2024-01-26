import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const EMPTY_COURSE: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false
}

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
  selectedCourse = EMPTY_COURSE;
  originalTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  deleteCourse(id) {
    console.log('Deleting course with id', id);
  }

  resetSelectedCourse() {
    this.selectCourse(EMPTY_COURSE);
  }

  saveCourse(selected) {
    console.log('Saving course', selected);
  }
}

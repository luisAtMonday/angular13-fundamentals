import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

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
  courses = [];
  selectedCourse = EMPTY_COURSE;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.fecthCourses();
  }

  fecthCourses() {
    this.coursesService.all().subscribe((res:any) => this.courses = res);
  }

  selectCourse(course) {
    this.selectedCourse = {...course};
  }

  deleteCourse(id) {
    this.coursesService.delete(id).subscribe(_ => this.fecthCourses());
  }

  resetSelectedCourse() {
    this.selectCourse(EMPTY_COURSE);
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.coursesService.create(course).subscribe(_ => this.fecthCourses());
  }

  updateCourse(course) {
    this.coursesService.update(course).subscribe(_ => this.fecthCourses());
  }
}

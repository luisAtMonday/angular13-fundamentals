import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnChanges {
  @Input() course: Course;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  originalTitle = '';

  ngOnChanges() {
    this.originalTitle = this.course.title.slice();
  }
}

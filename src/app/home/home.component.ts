import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$: any;

  selectedLesson = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.lessons$ = this.lessonsService.all();
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}

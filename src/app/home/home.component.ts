import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons = [];

  selectedLesson = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.lessonsService.all().subscribe((res: any) => this.courseLessons = res);
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}

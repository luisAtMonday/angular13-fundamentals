import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  model = 'lessons';

  constructor(private http: HttpClient){}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  create(lesson) {
    return this.http.post(this.getUrl(), lesson);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id));
  }

  update(lesson) {
    return this.http.put(this.getUrlWithId(lesson.id), lesson);
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient){}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id));
  }

  update(course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

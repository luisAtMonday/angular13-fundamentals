import { TestBed, async } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/courses';
const BASE_URL_WITH_ID = BASE_URL + '/1';
const noop = () => {};
const mockHttpClient = {
  get: noop,
  post: noop,
  put: noop,
  delete: noop
};

const EMPTY_COURSE: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false
}

describe('CoursesService', () => {
  let service: CoursesService;
  let client: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpClient }
      ]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    service = TestBed.inject(CoursesService);
    client = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient.get when fetching all courses', () => {
    spyOn(client, 'get').and.callThrough();

    service.all();

    expect(client.get).toHaveBeenCalledOnceWith(BASE_URL);
  });

  it('should call HttpClient.delete when deleting a course', () => {
    spyOn(client, 'delete').and.callThrough();
    const id = 1;

    service.delete(id);

    expect(client.delete).toHaveBeenCalledOnceWith(BASE_URL_WITH_ID);
  });

  it('should call HttpClient.post when creating a course', () => {
    spyOn(client, 'post').and.callThrough();

    service.create(EMPTY_COURSE);

    expect(client.post).toHaveBeenCalledOnceWith(BASE_URL, EMPTY_COURSE);
  });

  it('should call HttpClient.put when updating a course', () => {
    spyOn(client, 'put').and.callThrough();
    const course = {...EMPTY_COURSE, id: '1'};

    service.update(course);

    expect(client.put).toHaveBeenCalledOnceWith(BASE_URL_WITH_ID, course);
  });
});

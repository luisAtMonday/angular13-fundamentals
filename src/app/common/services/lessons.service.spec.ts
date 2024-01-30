import { async, TestBed } from '@angular/core/testing';

import { LessonsService } from './lessons.service';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/lessons';
const BASE_URL_WITH_ID = BASE_URL + '/1';
const noop = () => {};
const mockHttpClient = {
  get: noop,
  post: noop,
  put: noop,
  delete: noop
};
const EMPTY_LESSON = {
  id: null,
  title: "Empty"
}

describe('LessonsService', () => {
  let service: LessonsService;
  let client: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpClient }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(LessonsService);
    client = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient.get when fetching all lessons', () => {
    spyOn(client, 'get').and.callThrough();

    service.all();

    expect(client.get).toHaveBeenCalledOnceWith(BASE_URL);
  });

  it('should call HttpClient.delete when deleting a lesson', () => {
    spyOn(client, 'delete').and.callThrough();
    const id = 1;

    service.delete(id);

    expect(client.delete).toHaveBeenCalledOnceWith(BASE_URL_WITH_ID);
  });

  it('should call HttpClient.post when creating a lesson', () => {
    spyOn(client, 'post').and.callThrough();

    service.create(EMPTY_LESSON);

    expect(client.post).toHaveBeenCalledOnceWith(BASE_URL, EMPTY_LESSON);
  });

  it('should call HttpClient.put when updating a lesson', () => {
    spyOn(client, 'put').and.callThrough();
    const lesson = {...EMPTY_LESSON, id: '1'};

    service.update(lesson);

    expect(client.put).toHaveBeenCalledOnceWith(BASE_URL_WITH_ID, lesson);
  });
});

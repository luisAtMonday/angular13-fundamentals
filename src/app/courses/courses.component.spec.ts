import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { CoursesService } from '../common/services/courses.service';
import { of } from 'rxjs';
import { Course } from '../common/models/course';

const noop = () => {};
const obs = of(true);
const mockCoursesService = {
  all: noop,
  delete: (id: string) => obs,
  create: (course: Course) => obs,
  update: (course: Course) => obs
};

const EMPTY_COURSE: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false
}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let service: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      providers: [
        { provide: CoursesService, useValue: mockCoursesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a service when fetching all courses', () => {
    spyOn(service, 'all').and.callThrough();
    
    component.fecthCourses();
    
    expect(service.all).toHaveBeenCalled();
  });

  it('should call a service when deleting a course and fetch all courses', () => {
    spyOn(service, 'delete').and.callThrough();
    spyOn(service, 'all').and.callThrough();
    const id = '1';

    component.deleteCourse(id);

    expect(service.delete).toHaveBeenCalledOnceWith(id);
    expect(service.all).toHaveBeenCalled();
  });

  it('should call a service when creating a course and fetch all courses', () => {
    spyOn(service, 'create').and.callThrough();
    spyOn(service, 'all').and.callThrough();

    component.saveCourse(EMPTY_COURSE);

    expect(service.create).toHaveBeenCalledOnceWith(EMPTY_COURSE);
    expect(service.all).toHaveBeenCalled();
  });

  it('should call a service when updating a course and fetch all courses', () => {
    spyOn(service, 'update').and.callThrough();
    spyOn(service, 'all').and.callThrough();
    const course = {
      ...EMPTY_COURSE,
      id: '1'
    };

    component.saveCourse(course);

    expect(service.update).toHaveBeenCalledOnceWith(course);
    expect(service.all).toHaveBeenCalled();
  });
});

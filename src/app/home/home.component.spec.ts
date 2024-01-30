import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { LessonsService } from '../common/services/lessons.service';

const mockLessonsService = {
  all: () => {}
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: LessonsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: LessonsService, useValue: mockLessonsService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LessonsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a service when fetching lessons', () => {
    spyOn(service, 'all').and.callThrough();
    component.fetchLessons();
    expect(service.all).toHaveBeenCalled();
  });
});

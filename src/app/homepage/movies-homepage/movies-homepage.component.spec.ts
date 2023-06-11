import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHomepageComponent } from './movies-homepage.component';

describe('RecommendedMoviesComponent', () => {
  let component: MoviesHomepageComponent;
  let fixture: ComponentFixture<MoviesHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesHomepageComponent]
    });
    fixture = TestBed.createComponent(MoviesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

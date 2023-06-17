import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilayMovieCardsComponent } from './similay-movie-cards.component';

describe('SimilayMovieCardsComponent', () => {
  let component: SimilayMovieCardsComponent;
  let fixture: ComponentFixture<SimilayMovieCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilayMovieCardsComponent]
    });
    fixture = TestBed.createComponent(SimilayMovieCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

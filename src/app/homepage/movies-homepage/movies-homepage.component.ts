import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieDTO } from '../../../api/model/movie.model';
import { MovieService } from '../../../api/service/movie.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-homepage',
  templateUrl: './movies-homepage.component.html',
  styleUrls: ['./movies-homepage.component.scss']
})
export class MoviesHomepageComponent implements OnInit, OnDestroy {

  trendingMovies: MovieDTO[] = [];
  popularMovies: MovieDTO[] = [];

  destroy$: Subject<void> = new Subject<void>()

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadTrendingMovies();
    this.loadPopularMovies();
  }

  private loadTrendingMovies(): void {
    this.movieService.getTrendingMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => this.trendingMovies = movies);
  }

  private loadPopularMovies(): void {
    this.movieService.getPopularMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => this.popularMovies = movies);
  }

  openMovieDetails(movieId: number|undefined) {
    if (movieId) {
      this.router.navigate(['/movie-details/' + movieId])
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
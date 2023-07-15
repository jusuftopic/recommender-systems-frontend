import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MovieDTO } from 'src/api/model/movie.model';
import { MovieService } from 'src/api/service/movie.service';

@Component({
  selector: 'app-movies-overview',
  templateUrl: './movies-overview.component.html',
  styleUrls: ['./movies-overview.component.css']
})
export class MoviesOverviewComponent implements OnInit, OnDestroy {

  movieTitle: string = '';
  movies: MovieDTO[] = [];

  loading = false;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.destroy$))
    .subscribe(params => {
      if(params && params['title']) {
        this.loading = true;
        this.movieTitle = params['title'];
        this.loadMoviesByTitle(params['title'])
      }
    })
  }

  private loadMoviesByTitle(title: string) {
     this.movieService.getMoviesByTitle(title)
     .pipe(takeUntil(this.destroy$))
    .subscribe(movies => {
      this.movies = movies;
      this.loading = false;
    })
  }

  openMovieDetails(movieId: number | undefined) {
    if(movieId) {
      this.router.navigate(['/movie-details/' + movieId]);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}

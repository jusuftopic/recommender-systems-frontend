import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../api/service/movie.service';
import { MovieDTO } from '../../api/model/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movie: MovieDTO | undefined;
  genreSimilarMovies: MovieDTO[] = [];
  castSimilarMovies: MovieDTO[] = [];
  ratingsSimilarMovies: MovieDTO[] = [];
  synopsesSimilarMovies: MovieDTO[] = [];
  titleSimilarMovies: MovieDTO[] = [];

  loading = false;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        if (params && params['id']) {
          this.loading = true;
          this.loadMovieData(params['id'])
        }
      });
  }

  private loadMovieData(movieId: number): void {
    this.movieService.getMovieById(movieId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => {
        if(movies) {
          this.movie = movies[0];
          if (this.movie.id) {
            this.loadSimilarMovies(this.movie.id);
          }}
      });
  }

  private loadSimilarMovies(movieId: number): void {
    this.loadGenreSimilarMovies(movieId);
    this.loadCastSimilarMovies(movieId);
    this.loadRatingsSimilarMovies(movieId);
    this.loadSynopsesSimilarMovies(movieId);
    this.loadTitleSimilarMovies(movieId);
  }

  private loadGenreSimilarMovies(movieId: number): void {
    this.movieService.getGenreSimilarMovies(movieId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(genreSimilarMovies =>{
       this.genreSimilarMovies = genreSimilarMovies;
       this.loading = false;
    });
  }

  private loadCastSimilarMovies(movieId: number): void {
    this.movieService.getCastCrewSimilarMovies(movieId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(castSimilarMovies => {
      this.castSimilarMovies = castSimilarMovies;
      this.loading = false;
    });
  }

  private loadRatingsSimilarMovies(movieId: number): void {
    this.movieService.getRatingsSimilarMovies(movieId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(ratingsSimilarMovies => {
       this.ratingsSimilarMovies = ratingsSimilarMovies;
       this.loading = false;
    });
  }

  private loadSynopsesSimilarMovies(movieId: number): void {
    this.movieService.getSynopsesSimilarMovies(movieId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(synopsesSimilarMovies => {
     this.synopsesSimilarMovies = synopsesSimilarMovies;
     this.loading = false; 
    });
  }

  private loadTitleSimilarMovies(movieId: number): void {
    this.movieService.getTitleSimilarMovies(movieId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(titlesSimilarMovies => {
      this.titleSimilarMovies = titlesSimilarMovies;
      this.loading = false;
    });
  }

  displayCollectionMovieData(coll: string[] | undefined): string {
    if (coll?.length === 1) {
      return coll[0];
    }

    return coll ? coll.join(', ') : '';
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}

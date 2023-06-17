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

  //TODO delete
  mockedMovies: MovieDTO[] = [
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      synopsis: 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      popularity: 21.946943,
      img: 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      genres: ['Action', 'Drama', 'Family'],
      cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney'],
      director: ['John Lasseter'],
      writer: ['Joss Whedon', 'Andrew Stanton', 'Joel Cohen', 'Alec Sokolow']
    },
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      synopsis: 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      popularity: 21.946943,
      img: 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      genres: ['Action', 'Drama', 'Family'],
      cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney'],
      director: ['John Lasseter'],
      writer: ['Joss Whedon', 'Andrew Stanton', 'Joel Cohen', 'Alec Sokolow']
    },
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      synopsis: 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      popularity: 21.946943,
      img: 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      genres: ['Action', 'Drama', 'Family'],
      cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney'],
      director: ['John Lasseter'],
      writer: ['Joss Whedon', 'Andrew Stanton', 'Joel Cohen', 'Alec Sokolow']
    },
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      synopsis: 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      popularity: 21.946943,
      img: 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      genres: ['Action', 'Drama', 'Family'],
      cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney'],
      director: ['John Lasseter'],
      writer: ['Joss Whedon', 'Andrew Stanton', 'Joel Cohen', 'Alec Sokolow']
    },
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      synopsis: 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      popularity: 21.946943,
      img: 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      genres: ['Action', 'Drama', 'Family'],
      cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney'],
      director: ['John Lasseter'],
      writer: ['Joss Whedon', 'Andrew Stanton', 'Joel Cohen', 'Alec Sokolow']
    },
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      synopsis: 'Led by Woody, Andy\'s toys live happily in his room until Andy\'s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy\'s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      popularity: 21.946943,
      img: 'https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      genres: ['Action', 'Drama', 'Family'],
      cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney'],
      director: ['John Lasseter'],
      writer: ['Joss Whedon', 'Andrew Stanton', 'Joel Cohen', 'Alec Sokolow']
    }
  ];

  destroy$: Subject<void> = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        if (params['id']) {
          this.loadMovieData(params['id'])
        }
      });
  }

  private loadMovieData(movieId: string): void {
    this.movieService.getMovieById(movieId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(movie => this.movie = movie);
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

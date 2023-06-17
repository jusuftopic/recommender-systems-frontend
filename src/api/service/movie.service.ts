import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MovieDTO } from '../model/movie.model';


/**
 * REST service for movie data exchange
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //TODO mocked data - will be deleted
  movies: MovieDTO[] = [
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

  constructor(private http: HttpClient) { }


  public getMovieById(movieId: string): Observable<MovieDTO> {
    return of(this.movies[0]);
  //  return this.http.get<MovieDTO>('movie/' + movieId);
  }

  public getGenreSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>('genres/' + movieId);
  }

  public getCastCrewSimilarMovies(movieId: number): Observable<MovieDTO[]> {
     return this.http.get<MovieDTO[]>('cast/' + movieId);
  }

  public getRatingsSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>('ratings/' + movieId);
  }

  public getSynopsesSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>('synopses/' + movieId);
  }

  public getTitleSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>('titles/' + movieId);
  }


  public getTrendingMovies(): Observable<MovieDTO[]> {
    //TODO mocked data - will be deleted
    return of(this.movies)
    // return this.http.get<MovieDTO[]>(this.moviesBaseUrl + '/trending');
  }

  public getPopularMovies(): Observable<MovieDTO[]> {
    //TODO mocked data - will be deleted
    return of(this.movies);
  }


}

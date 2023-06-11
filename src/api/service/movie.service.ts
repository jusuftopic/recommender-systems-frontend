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

  readonly moviesBaseUrl = environment.baseUrl + '/movies';

  //TODO mocked data - will be deleted
  movies: MovieDTO[] = [
    {
      id: 1,
      title: 'The Seven Deadly Sins: Wrath of the Gods',
      img: 'assets/img/trending/trend-1.jpg',
      genres: ['Action', 'Drama'],
      similar_genres: ['Action', 'Drama'],
      genre_similarity: 1,
      recommended_movies: []
    },
    {
      id: 2,
      title: 'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien',
      img: 'assets/img/trending/trend-2.jpg',
      genres: ['Action', 'Drama'],
      similar_genres: ['Action', 'Drama'],
      genre_similarity: 1,
      recommended_movies: []
    },
    {
      id: 3,
      title: 'Shingeki no Kyojin Season 3 Part 2',
      img: 'assets/img/trending/trend-3.jpg',
      genres: ['Action', 'Drama'],
      similar_genres: ['Action', 'Drama'],
      genre_similarity: 1,
      recommended_movies: []
    },
    {
      id: 4,
      title: 'Fullmetal Alchemist: Brotherhood',
      img: 'assets/img/trending/trend-4.jpg',
      genres: ['Action', 'Drama'],
      similar_genres: ['Action', 'Drama'],
      genre_similarity: 1,
      recommended_movies: []
    },
    {
      id: 5,
      title: 'Code Geass: Hangyaku no Lelouch R2',
      img: 'assets/img/trending/trend-6.jpg',
      genres: ['Action', 'Drama'],
      similar_genres: ['Action', 'Drama'],
      genre_similarity: 1,
      recommended_movies: []
    },
    {
      id: 6,
      title: 'Shiratorizawa Gakuen Koukou',
      img: 'assets/img/trending/trend-5.jpg',
      genres: ['Action', 'Drama'],
      similar_genres: ['Action', 'Drama'],
      genre_similarity: 1,
      recommended_movies: []
    }
  ]

  constructor(private http: HttpClient) { }

  /**
   * Search for the movie a user typed in a search-dialog
   * @param movie Movie to search
   */
  public searchMovie(movie: string): Observable<MovieDTO> {
    //TODO mocked data - will be deleted
    return of(this.movies[0]);
   // return this.http.post<MovieDTO>(this.moviesBaseUrl + '/search', movie);
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

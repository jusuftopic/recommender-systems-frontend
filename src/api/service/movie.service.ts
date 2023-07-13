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

  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  public getMovieById(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'movie/' + movieId + '/');
  }

  public getGenreSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'genres/' + movieId + '/');
  }

  public getCastCrewSimilarMovies(movieId: number): Observable<MovieDTO[]> {
     return this.http.get<MovieDTO[]>(this.baseUrl + 'cast/' + movieId + '/');
  }

  public getRatingsSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'ratings/' + movieId + '/');
  }

  public getSynopsesSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'synopses/' + movieId + '/');
  }

  public getTitleSimilarMovies(movieId: number): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'titles/' + movieId + '/');
  }


  public getTrendingMovies(): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'titles/' + 1 + '/');
  }

  public getPopularMovies(): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'ratings/' + 1 + '/');
  }

  public getTopViewMovies(): Observable<MovieDTO[]> {
    return this.http.get<MovieDTO[]>(this.baseUrl + 'cast/' + 3 + '/');
  }


}

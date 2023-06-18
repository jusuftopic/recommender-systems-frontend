import { Component, Input } from '@angular/core';
import { MovieDTO } from '../../../../api/model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similay-movie-cards',
  templateUrl: './similay-movie-cards.component.html',
  styleUrls: ['./similay-movie-cards.component.css']
})
export class SimilayMovieCardsComponent {

  @Input() title: string = '';
  @Input() movies: MovieDTO[] = [];

  constructor(private router: Router) {
  }

  openMovie(movieId: number|undefined): void {
    if (movieId) {
      this.router.navigate(['/movie-details/' + movieId]);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

}

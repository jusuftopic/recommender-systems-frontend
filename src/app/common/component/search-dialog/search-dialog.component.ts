import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OpenSearchService } from '../../service/open-search.service';
import { FormControl } from '@angular/forms';
import { MovieService } from '../../../../api/service/movie.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html'
})
export class SearchDialogComponent implements OnDestroy {

  openSearch: boolean = false;

  destroy$: Subject<void> = new Subject<void>();

  searchInput = new FormControl('')


  openSearchSubscription$ = this.openSearchService.openSearchDialog$
    .pipe(takeUntil(this.destroy$))
    .subscribe(openSearch => this.openSearch = openSearch)

  constructor(private openSearchService: OpenSearchService,
              private movieService: MovieService,
              ) {
  }

  /**
   * Method triggered every time user types something in search input field. It sends
   * searched word to the backend in order to get recommended movies.
   *
   * @param searchResult Input event
   */
  onSearch(searchResult: any): void {
    const movieToSearch = searchResult?.target?.value;
    if (movieToSearch) {
      this.movieService.searchMovie(movieToSearch)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (movie) => console.log(movie),
          error: (err) => console.log(err)
        })
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
    this.openSearchSubscription$.unsubscribe();
  }
}

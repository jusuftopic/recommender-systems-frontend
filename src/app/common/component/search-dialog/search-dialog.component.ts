import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OpenSearchService } from '../../service/open-search.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['search-dialog.component.scss']
})
export class SearchDialogComponent implements OnDestroy {

  openSearch: boolean = false;

  destroy$: Subject<void> = new Subject<void>();

  movieTitleFormControl = new FormControl('')


  openSearchSubscription$ = this.openSearchService.openSearchDialog$
    .pipe(takeUntil(this.destroy$))
    .subscribe(openSearch => this.openSearch = openSearch)

  constructor(private openSearchService: OpenSearchService,
              private router: Router
              ) {
  }

  /**
   * Method triggered every time users type movie title in search input field and press enter button.
   * They will be navigated to details page.
   */
  onEnter(): void {
    const movieTitle = this.movieTitleFormControl?.value;
    if (movieTitle) {
      this.router.navigate(['movies-overview', movieTitle]);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
    this.openSearchSubscription$.unsubscribe();
  }
}

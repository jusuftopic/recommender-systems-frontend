import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OpenSearchService } from '../../service/open-search-service/open-search.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html'
})
export class SearchDialogComponent implements OnDestroy {

  openSearch: boolean = false;

  destroy$: Subject<void> = new Subject<void>();

  openSearchSubscription$ = this.openSearchService.openSearchDialog$
    .pipe(takeUntil(this.destroy$))
    .subscribe(openSearch => this.openSearch = openSearch)

  constructor(private openSearchService: OpenSearchService) {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
    this.openSearchSubscription$.unsubscribe();
  }
}

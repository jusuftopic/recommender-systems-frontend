import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Service communicates between components in order to provide information
 * whether search dialog should be displayed or not
 */
@Injectable({
  providedIn: 'root'
})
export class OpenSearchService {

  private openSearchDialogSubject = new Subject<boolean>();

  openSearchDialog$: Observable<boolean> = this.openSearchDialogSubject.asObservable();

  /**
   * The component that triggers the search should implement this method in order to process the event and open dialog
   * @param toOpenDialog Whether or not should be dialog opened
   */
  openSearchDialog(toOpenDialog: boolean): void {
    this.openSearchDialogSubject.next(toOpenDialog);
  }
}

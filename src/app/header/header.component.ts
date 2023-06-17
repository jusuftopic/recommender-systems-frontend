import { Component, OnDestroy } from '@angular/core';
import { OpenSearchService } from '../common/service/open-search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHomepageActive: boolean = true;


  constructor(private openSearchService: OpenSearchService) {
  }

  openSearch(): void {
    this.openSearchService.openSearchDialog(true);
  }
}

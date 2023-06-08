import { Component, OnDestroy } from '@angular/core';
import { OpenSearchService } from '../common/service/open-search-service/open-search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHomepageActive: boolean = true;
  searchMovies: boolean = false;


  constructor(private openSearchService: OpenSearchService) {
  }

  openSearch(): void {
    console.log("Sent")
    this.searchMovies = true;
    this.openSearchService.openSearchDialog(this.searchMovies);
  }



}

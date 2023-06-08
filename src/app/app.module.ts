import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterOutlet } from '@angular/router';
import { MoviesSliderComponent } from './homepage/movies-slider/movies-slider.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RecommendedMoviesComponent } from './homepage/recommended-movies/recommended-movies.component';
import { SearchDialogComponent } from './common/component/search-dialog/search-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MoviesSliderComponent,
    FooterComponent,
    RecommendedMoviesComponent,
    SearchDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

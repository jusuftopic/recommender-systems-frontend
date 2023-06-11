import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterOutlet } from '@angular/router';
import { MoviesSliderComponent } from './homepage/movies-slider/movies-slider.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesHomepageComponent } from './homepage/movies-homepage/movies-homepage.component';
import { SearchDialogComponent } from './common/component/search-dialog/search-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MoviesSliderComponent,
    FooterComponent,
    MoviesHomepageComponent,
    SearchDialogComponent,
    MovieDetailsComponent
  ],
  imports: [
    /* COMMON */
    BrowserModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,

    /* APPLICATION SPECIFIC */
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

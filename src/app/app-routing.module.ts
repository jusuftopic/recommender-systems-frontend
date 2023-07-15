import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesOverviewComponent } from './movies-overview/movies-overview.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'movies-overview/:title',
    component: MoviesOverviewComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
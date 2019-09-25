import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MoviesComponent
  },
  {
    path: 'tv',
    component: TvShowsComponent
  },
  {
    path: 'person',
    component: ActorsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'movie/:movieID',
    component: MoviesCardComponent
  },
  {
    path: 'tv/:movieID',
    component: TvShowCardComponent
  },
  {
    path: 'person/:movieID',
    component: ActorCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { ActorsComponent } from './actors/actors.component';
import { RandomComponent } from './random/random.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'tvShow',
    component: TvShowComponent,
  },
  {
    path: 'actors',
    component: ActorsComponent,
  },
  {
    path: 'random',
    component: RandomComponent,
  },
  {
    path: '',
    component: IndexComponent,
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

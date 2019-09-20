import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { IndexComponent } from './index/index.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { ActorsComponent } from './actors/actors.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    IndexComponent,
    TvShowComponent,
    ActorsComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

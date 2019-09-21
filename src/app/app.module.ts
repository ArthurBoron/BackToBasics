import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './components/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { MovieService } from './services/movie.service';
import { MoviesCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ActorsComponent, ActorCardComponent,
    MoviesComponent, MoviesCardComponent,
    HomeComponent, TvShowsComponent, TvShowCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}

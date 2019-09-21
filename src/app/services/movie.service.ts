import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '52f8b1f1fd9b853d910f3fb53654d48c';
  private movie_string: string;

  constructor(public http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.movie_url}search/movie?query=${this.movie_string}&api_key=${this.api_key}&language=en-US&include_adult=false`);
  }

  getTrendingMovies() {
    return this.http.get(`${this.movie_url}movie/now_playing?api_key=${this.api_key}&language=en-US`);
  }

  getMovie(id: number) {
    return this.http.get(`${this.movie_url}movie/${id}?api_key=${this.api_key}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.movie_url}movie/${id}/credits?api_key=${this.api_key}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

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

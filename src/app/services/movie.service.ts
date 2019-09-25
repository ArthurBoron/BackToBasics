import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getTrendingMovies() {
    return this.http.get(`${this.movieUrl}movie/now_playing?api_key=${this.apiKey}&language=en-US`);
  }

  getMovie(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }
}

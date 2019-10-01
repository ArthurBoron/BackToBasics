import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getGenres() {
    return this.http.get(`${this.movieUrl}genre/list?api_key=${this.apiKey}&language=en-US`);
  }

  getTrendingMovies(page: number, genre: number) {
    if (genre === -1) {
      return this.http.get(`${this.movieUrl}discover/movie?api_key=${this.apiKey}&language=en-US&page=${page}`);
    } else {
      return this.http.get(`${this.movieUrl}discover/movie?api_key=${this.apiKey}&language=en-US&page=${page}&with_genres=${genre}`);
    }
  }

  getMovie(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }
}

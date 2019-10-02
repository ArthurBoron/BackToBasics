import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private movieUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getTrendingMovies(page: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.movieUrl}discover/movie?api_key=${this.apiKey}&language=en-US&page=${page}&primary_release_date.lte=2000-01-01`);
  }

  getMovie(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }
}

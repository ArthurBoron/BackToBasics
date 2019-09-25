import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '52f8b1f1fd9b853d910f3fb53654d48c';
  private search_string: string;

  constructor(public http: HttpClient) { }

  searchMovie(movie: string) {
    this.search_string = movie;
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.movie_url}search/multi?query=${this.search_string}&api_key=${this.api_key}&language=en-US&include_adult=false`);
  }

  getMovie(id: number) {
    return this.http.get(`${this.movie_url}movie/${id}?api_key=${this.api_key}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.movie_url}movie/${id}/credits?api_key=${this.api_key}`);
  }
}

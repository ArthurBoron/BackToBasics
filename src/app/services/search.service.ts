import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private movieUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';
  private searchString: string;

  constructor(public http: HttpClient) { }

  searchMovie(movie: string) {
    this.searchString = movie;
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.movieUrl}search/multi?query=${this.searchString}&api_key=${this.apiKey}&language=en-US&include_adult=false`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private tvShow_url = 'https://api.themoviedb.org/3/';
  private api_key = '52f8b1f1fd9b853d910f3fb53654d48c';
  private tvShow_string: string;

  constructor(public http: HttpClient) { }

  searchMovie(tvShow: string) {
    this.tvShow_string = tvShow;
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.tvShow_url}search/movie?query=${this.tvShow_string}&api_key=${this.api_key}&language=en-US&include_adult=false`);
  }

  getTrendingTvShows() {
    return this.http.get(`${this.tvShow_url}tv/on_the_air?api_key=${this.api_key}&language=en-US`);
  }

  getTvShow(id: number) {
    return this.http.get(`${this.tvShow_url}tv/${id}?api_key=${this.api_key}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.tvShow_url}tv/${id}/credits?api_key=${this.api_key}`);
  }
}

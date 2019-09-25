import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private tvShowUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getTrendingTvShows() {
    return this.http.get(`${this.tvShowUrl}tv/on_the_air?api_key=${this.apiKey}&language=en-US`);
  }

  getTvShow(id: number) {
    return this.http.get(`${this.tvShowUrl}tv/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.tvShowUrl}tv/${id}/credits?api_key=${this.apiKey}`);
  }
}

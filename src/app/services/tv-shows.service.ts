import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private tvShowUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getTrendingTvShows(page: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.tvShowUrl}discover/tv?api_key=${this.apiKey}&language=en-US&page=${page}&first_air_date.lte=1980-01-01`);
  }

  getTvShow(id: number) {
    return this.http.get(`${this.tvShowUrl}tv/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getCredits(id: number) {
    return this.http.get(`${this.tvShowUrl}tv/${id}/credits?api_key=${this.apiKey}`);
  }
}

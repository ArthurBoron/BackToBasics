import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actorUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getPopularActors(page: number) {
    return this.http.get(`${this.actorUrl}person/popular?api_key=${this.apiKey}&language=en-US&page=${page}`);
  }

  getActor(id: number) {
    return this.http.get(`${this.actorUrl}person/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieCredits(id: number) {
    return this.http.get(`${this.actorUrl}person/${id}/movie_credits?api_key=${this.apiKey}&language=en-US`);
  }
}

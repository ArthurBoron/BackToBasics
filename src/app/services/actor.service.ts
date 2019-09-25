import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actor_url = 'https://api.themoviedb.org/3/';
  private api_key = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  getPopularActors() {
    return this.http.get(`${this.actor_url}person/popular?api_key=${this.api_key}&language=en-US`);
  }

  getActor(id: number) {
    return this.http.get(`${this.actor_url}person/${id}?api_key=${this.api_key}&language=en-US`);
  }
}

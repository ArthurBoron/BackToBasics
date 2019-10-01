import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  private movieUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '52f8b1f1fd9b853d910f3fb53654d48c';

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  closeAd(){
    document.getElementById('close').style.height = '0%';
  }

  openAd(){
    document.getElementById('close').style.height = '61%';
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getMovie(id: number) {
    return this.http.get(`${this.movieUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }


}


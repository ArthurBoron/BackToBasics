import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  trendingMovies: any;
  movie: any;
  genres: any;
  backgroundImg: any;
  credits: any;
  filteredCast: any;

  constructor(public http: HttpClient, public randomService: RandomService) {
    this.randomService.getTrendingMovies(this.randomIntFromInterval(1, 7)).subscribe(data => {
      const randomMovie = this.randomIntFromInterval(0, 19);
      this.trendingMovies = data['results'][randomMovie];
      this.randomService.getMovie(this.trendingMovies.id).subscribe(movie => {
        this.movie = movie;
        this.genres = this.movie.genres.map(el => el.name); // Getting the genre names and storing them in a new array
        this.backgroundImg = this.movie.backdrop_path;
      });
  
      this.randomService.getCredits(this.trendingMovies.id).subscribe(credits => {
        this.credits = credits;
        // tslint:disable-next-line:max-line-length
        this.filteredCast = this.credits.cast.slice(0, 4).map(el => el.name); // Getting only the first 4 cast members and storing them in a new array
      });
    });
   }

  ngOnInit() {}

  closeAd() {
    document.getElementById('close').style.height = '0%';
  }

  openAd() {
    document.getElementById('close').style.height = '61%';
  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



}


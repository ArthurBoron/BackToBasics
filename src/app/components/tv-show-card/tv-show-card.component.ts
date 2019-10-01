import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['../movie-card/movie-card.component.scss']
})
export class TvShowCardComponent implements OnInit {

  movie: any;
  credits: any;
  filteredCast: any;
  genres: any;
  imageUrl: 'https://image.tmdb.org/t/p/w500/';
  backgroundImg: any;

  constructor(
    private router: ActivatedRoute,
    private movieService: TvShowService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['movieID'];

      this.movieService.getTvShow(id).subscribe(movie => {
        this.movie = movie;
        this.genres = this.movie.genres.map(el => el.name); // Getting the genre names and storing them in a new array
        this.backgroundImg = this.movie.backdrop_path;
      });

      this.movieService.getCredits(id).subscribe(credits => {
        this.credits = credits;
        // tslint:disable-next-line:max-line-length
        this.filteredCast = this.credits.cast.slice(0, 4).map(el => el.name); // Getting only the first 4 cast members and storing them in a new array
      });
    });
  }

}

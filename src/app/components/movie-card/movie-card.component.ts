import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MoviesCardComponent implements OnInit {
  movie: any;
  credits: any;
  filteredCast: any;
  genres: any;
  imageUrl: 'https://image.tmdb.org/t/p/w500/';
  backgroundImg: any;

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['movieID'];

      this.movieService.getMovie(id).subscribe(movie => {
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

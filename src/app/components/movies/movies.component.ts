import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any;
  filteredTrendingMovies: any;

  constructor(public movieService: MovieService) {
    // Get trending movies
    this.movieService.getTrendingMovies().subscribe(data => {
      this.trendingMovies = data['results'];
    });
  }

  ngOnInit() {}
}

import { Component, OnInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any;
  filteredTrendingMovies: any;

  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) {
    this.movieService.getTrendingMovies(1).subscribe(data => {
      this.trendingMovies = data['results'];
    });
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.movieService.getTrendingMovies(queryParams.page).subscribe(data => {
        this.trendingMovies = data['results'];
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/services/tv-shows.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['../movies/movies.component.scss']
})
export class TvShowsComponent implements OnInit {

  trendingTvShows: any;
  filteredTrendingMovies: any;

  constructor(private activeRoute: ActivatedRoute, private tvShowService: TvShowService) {
    this.tvShowService.getTrendingTvShows(1).subscribe(data => {
      this.trendingTvShows = data['results'];
    });
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.tvShowService.getTrendingTvShows(queryParams.page).subscribe(data => {
        this.trendingTvShows = data['results'];
      });
    });
  }

}

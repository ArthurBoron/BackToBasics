import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  trendingTvShows: any;
  filteredTrendingMovies: any;

  constructor(public tvShowService: TvShowService) {
    // Get trending movies
    this.tvShowService.getTrendingTvShows().subscribe(data => {
      this.trendingTvShows = data['results'];
    });
  }

    ngOnInit() {
    }

}

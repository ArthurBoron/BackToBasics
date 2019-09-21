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
    // Get trending tv Shows
    this.tvShowService.getTrendingTvShows().subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.trendingTvShows = data['results'];
    });
  }

    ngOnInit() {
    }

}

import { Component, OnInit, AfterContentChecked, OnDestroy, OnChanges } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any;
  genres: any;

  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService, private router: Router) {
      this.movieService.getTrendingMovies(1, -1).subscribe(data => {
      this.trendingMovies = data['results'];
      });
      this.movieService.getGenres().subscribe(data => {
      this.genres = data['genres'];
      });
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.movieService.getGenres().subscribe(data => {
        const genreName = this.getNameOfGenreDependingOnUrl();
        let genreId = -1;
        genreId = this.getIdOfGenreDependingOnUrl(data['genres'], genreName);
        this.movieService.getTrendingMovies(queryParams.page, genreId).subscribe(datas => {
          this.trendingMovies = datas['results'];
        });
      });
    });
  }

  routeGenre(valueOfSelected: string) {
    if (valueOfSelected.endsWith(' ')) {
      valueOfSelected = valueOfSelected.substring(0, valueOfSelected.length - 1);
    }
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.router.navigate(['/movie'], { queryParams: { page: 1, genre: valueOfSelected }});
    });
  }

  getNameOfGenreDependingOnUrl() {
    const parameters = new URLSearchParams(window.location.search);
    const stringGenre = parameters.get('genre');
    return stringGenre;
  }

  getIdOfGenreDependingOnUrl(genres, genreName: string) {
    let id = -1;
    genres.forEach(element => {
      if (genreName === element.name) {
        id =  element.id;
      }
    });
    return id;
  }

  goTopAndChangePage(pageToJoin: number) {
    window.scrollTo(0, 0);
    this.activeRoute.queryParams.subscribe(queryParams => {
      const genreChosen = this.getNameOfGenreDependingOnUrl();
      this.router.navigate(['/movie'], { queryParams: { page: pageToJoin, genre: genreChosen }});
    });
  }
}

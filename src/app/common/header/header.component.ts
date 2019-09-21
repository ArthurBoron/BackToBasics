import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  movie: any;
  searchResult: any;

  @ViewChild('closeDropdown', { static: true }) el: ElementRef; // Getting access to the dom element through ViewChild

  constructor(public movieService: MovieService) {}

  searchMovies() {
    if (this.movie === '') {
      this.el.nativeElement.style.visibility = 'hidden';
    }
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.el.nativeElement.style.visibility = 'visible';
      // tslint:disable-next-line: no-string-literal
      this.searchResult = data['results'];
    });
  }

  hideDropdown() {
    this.el.nativeElement.style.visibility = 'hidden';
  }

  ngOnInit() {}
}

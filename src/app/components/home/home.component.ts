import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
      this.searchResult = data['results'];
    });
  }

  hideDropdown() {
    this.el.nativeElement.style.visibility = 'hidden';
  }

  ngOnInit() {}

}

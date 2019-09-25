import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movie: any;
  searchResult: any;

  @ViewChild('closeDropdown', { static: true }) el: ElementRef; // Getting access to the dom element through ViewChild

  constructor(public searchService: SearchService) {}

  searchMovies() {
    if (this.movie === '') {
      this.el.nativeElement.style.visibility = 'hidden';
    }
    this.searchService.searchMovie(this.movie).subscribe(data => {
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

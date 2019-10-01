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

  ngOnInit() {
    this.pickBackgroundImage();
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  pickBackgroundImage() {
    const rand = this.randomIntFromInterval(1, 52);
    document.getElementById('randPicture').style.backgroundImage = 'url("assets/images/bg(' + rand + ').jpg")';
  }

}

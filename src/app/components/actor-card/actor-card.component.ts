import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['../movie-card/movie-card.component.scss']
})
export class ActorCardComponent implements OnInit {
  movie: any;
  credits: any;
  filteredCast: any;
  genres: any;
  imageUrl: 'https://image.tmdb.org/t/p/w500/';
  backgroundImg: any;

  constructor(
    private router: ActivatedRoute,
    private actorService: ActorService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['movieID'];

      this.actorService.getActor(id).subscribe(movie => {
        this.movie = movie;
        this.genres = this.movie.genres.map(el => el.name); // Getting the genre names and storing them in a new array
        this.backgroundImg = this.movie.backdrop_path;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['../movie-card/movie-card.component.scss']
})
export class ActorCardComponent implements OnInit {
  actor: any;
  credits: any;

  constructor(
    private router: ActivatedRoute,
    private actorService: ActorService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['movieID'];

      this.actorService.getActor(id).subscribe(actor => {
        this.actor = actor;
      });
      this.actorService.getMovieCredits(id).subscribe(credits => {
        const creditOfActor = credits['cast'];
        // tslint:disable-next-line: only-arrow-functions
        creditOfActor.sort(function(a, b) {return b.popularity - a.popularity; });
        this.credits = creditOfActor.slice(0, 4).map(el => el.title);
        console.log(this.credits);
      });
    });
  }
}

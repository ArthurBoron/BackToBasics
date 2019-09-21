import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  popularActors: any;
  filteredPopularActors: any;

  constructor(public actorService: ActorService) {
    // Get trending movies
    this.actorService.getPopularActors().subscribe(data => {
      this.popularActors = data['results'];
    });
  }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  popularActors: any;
  filteredPopularActors: any;

  constructor(private activeRoute: ActivatedRoute, private actorService: ActorService) {
    this.actorService.getPopularActors(1).subscribe(data => {
      this.popularActors = data['results'];
    });
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.actorService.getPopularActors(queryParams.page).subscribe(data => {
        this.popularActors = data['results'];
      });
    });
  }

}

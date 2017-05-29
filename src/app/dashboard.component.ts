import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
styleUrls: [ './dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = []; // Define a heroes array property.

  constructor(private heroService: HeroService) { } // Inject the HeroService in the constructor and hold it in a private heroService field.

  ngOnInit(): void { // Call the service to get heroes inside the Angular ngOnInit() lifecycle hook.
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }


}
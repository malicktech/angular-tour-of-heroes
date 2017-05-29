import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



// @Component call.
@Component({
  // component metadata
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [] // The providers array tells Angular to create a fresh instance of the HeroService
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    // use Promises, To coordinate the view with the response,
    // Pass the callback function as an argument to the Promise's then() method:
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); // call the service and get the data in one line
  }

  // ngOnInit method with the initialization logic inside
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}






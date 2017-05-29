import { Injectable } from '@angular/core'; // imported the Angular Injectable function and applied that function as an @Injectable() decorator.

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// the service data from anywhere—a web service, local storage, or a mock data source
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> { // Promise-returning
        return Promise.resolve(HEROES);
    } // stub

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    // To simulate a slow connection
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}

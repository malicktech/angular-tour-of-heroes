import { Injectable } from '@angular/core'; // imported the Angular Injectable function and applied that function as an @Injectable() decorator.
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// the service data from anywhere—a web service, local storage, or a mock data source
@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api

    private headers = new Headers({ 'Content-Type': 'application/json' });


    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> { // Promise-returning
        return this.http.get(this.heroesUrl) // returns an RxJS Observable
            .toPromise() // converted the Observable to a Promise
            .then(response => response.json().data as Hero[]) // Extracting the data in the then callback
            .catch(this.handleError); // catch server failures
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`; // the hero id is encoded in the URL
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    // Error Handling
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    // To simulate a slow connection
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

    private heroesUrl = 'http://localhost:8080/heroes';  // URL to web api

    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        const searchPath = 'search/findByName?name=';
        return this.http
            .get(`${this.heroesUrl}/${searchPath}${term}`)
            .map(response => response.json()._embedded.heroes as Hero[]);
    }
}

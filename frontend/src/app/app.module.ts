import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroFormComponent } from './hero-form.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [ // list of application components, pipes, and directives that belong to the module
    // Every component must be declared in one—and only one—Angular module.
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroFormComponent
  ],
  providers: [
    HeroService // created a singleton HeroService instance, available to all components of the app
    // // The providers array tells Angular to create a fresh instance of the HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}

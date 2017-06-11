import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'hero-form', // can drop this form in a parent template with a <hero-form> tag
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    // add {{diagnostic}} to template so see  the two-way data binding
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        this.model = new Hero(42, '', '');
    }

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: any) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    }
}

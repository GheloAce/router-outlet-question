import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroChoice, heroMap} from '../hero-db.mock';

@Component({
    selector: 'app-hero-detail',
    template: `
        <a routerLink="/">Go Back</a>
        <br/>
        {{hero && hero.name}}
    `,
    styles: [],
})
export class HeroDetailComponent implements OnInit {
    hero: HeroChoice;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(param => this.hero = heroMap[param['id']]);
    }
}

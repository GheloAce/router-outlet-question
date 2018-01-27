import {Component, OnInit} from '@angular/core';
import {heroList} from '../hero-db.mock';

@Component({
    selector: 'app-hero-list',
    template: `
        <ul>
            <li *ngFor="let hero of heroList">
                <a routerLink="{{hero.id}}">{{hero.name}}</a>
            </li>
        </ul>
    `,
    styles: [],
})
export class HeroListComponent implements OnInit {
    heroList = heroList;

    constructor() {
    }

    ngOnInit() {
    }

}

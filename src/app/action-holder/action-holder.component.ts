import {Component} from '@angular/core';

@Component({
    selector: 'app-action-holder',
    template: `
        <p>
            Actions:
            <router-outlet></router-outlet>
        </p>
    `,
    styles: [],
})
export class ActionHolderComponent {
}

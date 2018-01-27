import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <table>
            <tr>
                <td>
                    <router-outlet name="aside"></router-outlet>
                </td>
                <td>
                    <router-outlet></router-outlet>
                </td>
            </tr>
        </table>
    `,
})
export class AppComponent {
    title = 'app';
}

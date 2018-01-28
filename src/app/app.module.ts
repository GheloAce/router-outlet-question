import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroListActionsComponent} from './hero-list-actions/hero-list-actions.component';
import {HeroDetailActionsComponent} from './hero-detail-actions/hero-detail-actions.component';
import {ActionHolderComponent} from './action-holder/action-holder.component';


    const routes: Routes = [
        {
            path: '', children: [
                {path: '', component: HeroListComponent},
                {path: ':id', component: HeroDetailComponent},
            ],
        },
        {
            path: '', outlet: 'aside', component: ActionHolderComponent,
            children: [
                {path: '', component: HeroListActionsComponent},
                {path: ':id', component: HeroDetailActionsComponent},
            ],
        },
    ];


@NgModule({
    declarations: [
        AppComponent,
        HeroListComponent,
        HeroDetailComponent,
        HeroListActionsComponent,
        HeroDetailActionsComponent,
        ActionHolderComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

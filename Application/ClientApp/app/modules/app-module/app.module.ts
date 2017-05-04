import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
//import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { SharedModule } from '../shared-module/shared.module';

import { AppRoutes } from './app.router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.,
        AppRoutes,
        RouterModule,
        SharedModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

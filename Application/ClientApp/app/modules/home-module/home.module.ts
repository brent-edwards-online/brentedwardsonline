import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeRoutes } from "./home.router";
import { RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

@NgModule({
    declarations: [
        HomeComponent,
        WelcomeComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        HomeRoutes,
        RouterModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
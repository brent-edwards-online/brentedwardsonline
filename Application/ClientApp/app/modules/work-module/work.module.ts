import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { WorkRoutes } from "./work.router";

import { WorkComponent } from './components/work/work.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
    declarations: [
        WorkComponent,
        HistoryComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        WorkRoutes,
        RouterModule
    ],
    providers: [],
    bootstrap: [WorkComponent]
})
export class WorkModule { }

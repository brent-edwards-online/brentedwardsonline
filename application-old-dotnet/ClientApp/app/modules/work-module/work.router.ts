import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './components/work/work.component';
import { HistoryComponent } from './components/history/history.component';

export const WorkRouter: Routes = [
    {
        path: '',
        component: WorkComponent,
        children: [
            {
                path: '',
                redirectTo: 'history',
                pathMatch: 'full'
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: '**',
                redirectTo: 'history',
            },
        ]
    }
];

export const WorkRoutes: ModuleWithProviders = RouterModule.forChild(WorkRouter);
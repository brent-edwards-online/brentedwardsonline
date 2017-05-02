import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';

export const HomeRouter: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'landing',
                pathMatch: 'full'
            },
            {
                path: 'landing',
                component: LandingComponent
            }
        ]
    }
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(HomeRouter);
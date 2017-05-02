import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const AppRouter: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => {
            return Promise.resolve(require('../home-module/home.module')['HomeModule']);
        }
    },
    {
        path: 'auth',
        loadChildren: () => {
            return Promise.resolve(require('../auth-module/auth.module')['AuthModule']);
        }
    },
    {
        path: 'tech',
        loadChildren: () => {
            return Promise.resolve(require('../tech-module/tech.module')['TechModule']);
        }
    },
    { path: '**', redirectTo: 'home' },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(AppRouter, {
    //preloadingStrategy: PreloadAllModules
});
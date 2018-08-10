import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

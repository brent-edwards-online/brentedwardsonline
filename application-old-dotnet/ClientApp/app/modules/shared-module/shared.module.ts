import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        NavigationComponent,
        FooterComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavigationComponent,
        FooterComponent
    ]
})
export class SharedModule { }
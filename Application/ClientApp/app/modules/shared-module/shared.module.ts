import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class SharedModule { }
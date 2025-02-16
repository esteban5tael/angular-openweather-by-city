import {  Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TimeComponent } from './components/time/time.component';

export const routes: Routes = [
    {path: '',component:MainComponent},
    {path: 'time',component:TimeComponent},
    {path:'*',redirectTo:'',pathMatch:'full'},
];

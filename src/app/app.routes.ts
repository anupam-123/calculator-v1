import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivisionComponent } from './division/division.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'sub',
    component: SubComponent,
  },
  {
    path: 'multiply',
    component: MultiplyComponent,
  },
  {
    path: 'division',
    component: DivisionComponent,
  },{
    path: 'home',
    component: HomePageComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

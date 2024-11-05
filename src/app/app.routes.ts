import { Routes } from '@angular/router';
import { AddComponent } from './operation/add/add.component';
import { SubComponent } from './operation/sub/sub.component';
import { MultiplyComponent } from './operation/multiply/multiply.component';
import { DivisionComponent } from './operation/division/division.component';
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
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

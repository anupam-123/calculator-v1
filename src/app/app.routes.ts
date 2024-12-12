import { Routes } from '@angular/router';
import { AddComponent } from './operation/add/add.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { SubComponent } from './operation/sub/sub.component';
import { MultiplyComponent } from './operation/multiply/multiply.component';
import { DivisionComponent } from './operation/division/division.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'callback', component: OktaCallbackComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'add', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'sub', component: SubComponent, canActivate: [AuthGuard] },
  { path: 'multiply', component: MultiplyComponent, canActivate: [AuthGuard] },
  { path: 'division', component: DivisionComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

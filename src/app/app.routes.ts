import { Routes } from '@angular/router';
import { AddComponent } from './operation/add/add.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { SubComponent } from './operation/sub/sub.component';
import { MultiplyComponent } from './operation/multiply/multiply.component';
import { DivisionComponent } from './operation/division/division.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'add', component: AddComponent },
  { path: 'sub', component: SubComponent },
  { path: 'multiply', component: MultiplyComponent },
  { path: 'division', component: DivisionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

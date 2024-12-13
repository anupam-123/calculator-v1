// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(OktaAuthStateService) private oktaAuth: OktaAuthStateService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.oktaAuth.authState$
      .toPromise()
      .then((authState: any) => authState.isAuthenticated);
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

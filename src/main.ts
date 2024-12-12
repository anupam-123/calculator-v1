// src/main.ts
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { oktaConfig } from './okta.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, OktaAuthModule),
    provideRouter(routes),
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
}).catch((err) => console.error(err));

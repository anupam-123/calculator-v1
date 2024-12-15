import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-rvo8gsyhnh0cx2gg.us.auth0.com',
      clientId: '0TbekASBGhvLOcaLLmJeJ6GSE4onzM4s',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
});
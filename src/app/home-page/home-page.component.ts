import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  title: string = '';
  redirectToPage(path: string) {
    this.router.navigate([path]);
  }
  ngOnInit() {
    this.title = this.route.snapshot.url[0].path;
  }
  logout() {
    {
      this.auth.logout({
        logoutParams: {
          returnTo: this.document.location.origin,
        },
      });
    }
  }
}

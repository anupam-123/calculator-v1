import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  title: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  redirectToPage(path: string) {
    this.router.navigate([path]);
  }
  ngOnInit() {
    this.title = this.route.snapshot.url[0].path;
  }
}

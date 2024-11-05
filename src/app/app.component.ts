import { AfterViewInit, Component, EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
class AppComponent {
  title: string = '';
  constructor(private inject: ActivatedRoute){}


}

// @Injectable({
//   providedIn: 'root',
// })
// class CalculatorService {
//   start() {
//     console.log('hello');
//   }
// }

export { AppComponent };

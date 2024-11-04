import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponentComponent } from '../form-component/form-component.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [FormComponentComponent, HeaderComponent],
  templateUrl: './division.component.html',
  styleUrl: './division.component.css',
})
export class DivisionComponent {

}

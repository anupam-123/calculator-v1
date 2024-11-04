import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponentComponent } from '../form-component/form-component.component';

@Component({
  selector: 'app-sub',
  standalone: true,
  imports: [FormsModule, FormComponentComponent],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.css'
})
export class SubComponent {
  
}

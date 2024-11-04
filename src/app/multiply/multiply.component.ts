import { Component } from '@angular/core';
import { FormComponentComponent } from '../form-component/form-component.component';

@Component({
  selector: 'app-multiply',
  standalone: true,
  imports: [FormComponentComponent],
  templateUrl: './multiply.component.html',
  styleUrl: './multiply.component.css'
})
export class MultiplyComponent {

}

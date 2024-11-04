import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { Logger } from '../log/loggers.service';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, FormComponentComponent, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent {
  myForm = new FormGroup({
    first: new FormControl(0),
    second: new FormControl(0),
    result: new FormControl(0)
  });

  constructor(private logs: Logger){}
  
  @Input()
  operation: string = '';
  onSubmit() {
    switch (this.operation) {
      case 'add':
        if (
          this.myForm.value.first != null &&
          this.myForm.value.second != null
        ) {
          this.myForm.value.result = this.myForm.value.first + this.myForm.value.second;
          this.logs.log(`Addition performed: `);
        }
        break;
      case 'sub':
        if (
          this.myForm.value.first != null &&
          this.myForm.value.second != null
        ) {
          this.myForm.value.result = this.myForm.value.first - this.myForm.value.second;
        }
        break;
      case 'multiply':
        if (
          this.myForm.value.first != null &&
          this.myForm.value.second != null
        ) {
          this.myForm.value.result = this.myForm.value.first * this.myForm.value.second;
        }
        break;
      case 'division':
        if (
          this.myForm.value.first != null &&
          this.myForm.value.second != null
        ) {
          this.myForm.value.result = this.myForm.value.first / this.myForm.value.second;
        }
        break;
      default:
        break;
    }
  }
}

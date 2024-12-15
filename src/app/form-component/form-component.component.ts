import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Logger } from '../log/loggers.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  myForm!: FormGroup;
  uppercaseAlphabet: string[] = [];

  @Input() numberOfText = 3;
  @Input() operation: string = '';

  constructor(private logs: Logger, private route: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const formControls: { [key: string]: FormControl } = {};
    this.uppercaseAlphabet = Array.from({ length: this.numberOfText }, (_, i) =>
      String.fromCharCode(65 + i)
    );

    this.uppercaseAlphabet.forEach((letter) => {
      formControls[letter] = new FormControl(0, [Validators.required]);
    });
    formControls['result'] = new FormControl(0);
    this.myForm = new FormGroup(formControls);
  }

  goBack(args: string) {
    this.route.navigate([args]);
  }

  onSubmit() {
    const values = this.uppercaseAlphabet.map(
      (letter) => this.myForm.get(letter)?.value || 0
    );

    let result = 0;
    switch (this.operation) {
      case 'add':
        result = values.reduce((sum, val) => sum + val, 0);
        this.logs.log(`Addition performed: ${result}`);
        break;
      case 'sub':
        result = values.reduce((diff, val) => diff - val);
        this.logs.log(`Subtraction performed: ${result}`);
        break;
      case 'multiply':
        result = values.reduce((prod, val) => prod * val, 1);
        this.logs.log(`Multiplication performed: ${result}`);
        break;
      case 'division':
        if (values.slice(1).some((val) => val === 0)) {
          this.logs.error('Division by zero is not allowed');
          alert('Divisor is zero');
          result = 0;
        } else {
          result = values.reduce((quot, val) => quot / val);
          this.logs.log(`Division performed: ${result}`);
        }
        break;
      default:
        this.logs.log('Invalid operation');
        break;
    }
    this.myForm.get('result')?.setValue(result);
  }
}

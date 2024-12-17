import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  onlyAlphabets: string = '';
  result: string = '';
  @Input() numberOfText = 2;
  @Input() operation: any[] = [];
  getLastAlph = '';
  disableDecrement: boolean = false;

  constructor(
    private logs: Logger,
    private route: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.createForm();
  }

  incrementField() {
    this.numberOfText += 1;
    const newLetter = String.fromCharCode(65 + this.numberOfText - 1);
    this.uppercaseAlphabet.push(newLetter);
    this.myForm.addControl(newLetter, new FormControl('', Validators.required));
    this.getLastAlph = newLetter;
    this.onlyAlphabets = this.uppercaseAlphabet.join(this.operation[1]);
    this.cdRef.detectChanges();
  }

  decrementField() {
    if (this.numberOfText > 1) {
      const lastLetter = this.uppercaseAlphabet.pop();
      if (lastLetter) {
        this.myForm.removeControl(lastLetter);
        this.numberOfText -= 1;
        this.getLastAlph =
          this.uppercaseAlphabet[this.uppercaseAlphabet.length - 1];
        this.onlyAlphabets = this.uppercaseAlphabet.join(this.operation[1]);
        this.cdRef.detectChanges();
      }
    }
  }

  createForm() {
    const formControls: { [key: string]: FormControl } = {};
    this.uppercaseAlphabet = Array.from({ length: this.numberOfText }, (_, i) =>
      String.fromCharCode(65 + i)
    );
    this.onlyAlphabets = this.uppercaseAlphabet.join(this.operation[1]);
    this.uppercaseAlphabet.forEach((letter) => {
      formControls[letter] = new FormControl('', [Validators.required]);
    });
    this.getLastAlph =
      this.uppercaseAlphabet[this.uppercaseAlphabet.length - 1];
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
    let result: any[] = [];

    if (this.myForm.invalid) {
      alert('Enter all the field');
      return;
    }
    switch (this.operation[0]) {
      case 'add':
        result = [values.reduce((sum, val) => sum + val, 0)];
        this.logs.log(`Addition performed: ${result}`);
        break;
      case 'sub':
        result = [values.reduce((diff, val) => diff - val)];
        this.logs.log(`Subtraction performed: ${result}`);
        break;
      case 'multiply':
        result = [values.reduce((prod, val) => prod * val, 1)];
        this.logs.log(`Multiplication performed: ${result}`);
        break;
      case 'division':
        if (values.slice(1).some((val) => val === 0)) {
          this.logs.error('Division by zero is not allowed');
          alert('Divisor is zero');
          result = [];
        } else {
          result = [values.reduce((quot, val) => quot / val).toFixed(2)];
          this.logs.log(`Division performed: ${result}`);
        }
        break;
      default:
        this.logs.log('Invalid operation');
        break;
    }
    this.result = result.join(', ');
  }

  resetForm() {
    this.myForm.reset();
    this.result = '';
    this.createForm();
  }
}

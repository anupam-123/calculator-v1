import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormComponentComponent } from '../form-component/form-component.component';
import { CalculatorService } from '../app.component';
import { Logger } from '../log/loggers.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, FormComponentComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Output()
  opp = new EventEmitter<string>();
  operation: string = 'add';

  constructor(private engine: CalculatorService, private log: Logger) {}

  add(){
    console.log("Successfully added")
  }
  ngOnInit() {
    this.opp.emit(this.operation);
    this.engine.start();
    this.log.error('Add page started');
  }
}

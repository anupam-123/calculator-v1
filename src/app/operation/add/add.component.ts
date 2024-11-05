import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormComponentComponent } from '../../form-component/form-component.component';
import { CalculatorService } from '../../app.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, FormComponentComponent, HeaderComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  current: string = '';
  constructor(private actiRoute: ActivatedRoute) {}
  ngOnInit() {
    this.current = this.actiRoute.snapshot.url[0].path;
  }
}

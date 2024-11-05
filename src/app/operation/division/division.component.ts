import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponentComponent } from '../../form-component/form-component.component';
import { HeaderComponent } from '../../header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [FormComponentComponent, HeaderComponent],
  templateUrl: './division.component.html',
  styleUrl: './division.component.css',
})
export class DivisionComponent implements OnInit {
  current: string = '';
  constructor(private actiRoute: ActivatedRoute) {}
  ngOnInit() {
    this.current = this.actiRoute.snapshot.url[0].path;
  }
}

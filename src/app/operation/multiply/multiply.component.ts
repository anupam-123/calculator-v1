import { Component, OnInit } from '@angular/core';
import { FormComponentComponent } from '../../form-component/form-component.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-multiply',
  standalone: true,
  imports: [FormComponentComponent, HeaderComponent],
  templateUrl: './multiply.component.html',
  styleUrl: './multiply.component.css',
})
export class MultiplyComponent implements OnInit {
  current: string = '';
  constructor(private actiRoute: ActivatedRoute) {}
  ngOnInit() {
    this.current = this.actiRoute.snapshot.url[0].path;
  }
}

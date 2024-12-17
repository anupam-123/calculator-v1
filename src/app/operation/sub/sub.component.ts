import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponentComponent } from '../../form-component/form-component.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-sub',
  standalone: true,
  imports: [FormsModule, FormComponentComponent, HeaderComponent],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.css',
})
export class SubComponent implements OnInit {
  current: any[] = [];

  constructor(private actiRoute: ActivatedRoute) {}
  ngOnInit() {
    this.current = [this.actiRoute.snapshot.url[0].path, ' - '];
  }
}

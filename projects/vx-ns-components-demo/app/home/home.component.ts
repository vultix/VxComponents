import {Component} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routes = [
    {name: 'Form Field', route: '/form-field'},
    {name: 'Radio', route: '/radio'}
  ];
}

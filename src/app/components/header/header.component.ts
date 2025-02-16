import { Component, input, InputSignal, Signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  mainTitle: InputSignal<string> = input('App Educativa');
  
  constructor() {}
}

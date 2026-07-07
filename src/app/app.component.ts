import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home/home-page.component';

@Component({
  selector: 'sc-root',
  standalone: true,
  imports: [HomePageComponent],
  template: `<sc-home-page />`,
})
export class AppComponent {}

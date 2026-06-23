import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './styles.css'
})
export class App {}

bootstrapApplication(App).catch((err) => console.error(err));

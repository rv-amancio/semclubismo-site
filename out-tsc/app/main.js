import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomePageComponent } from './app/pages/home/home-page.component';
import { LitePageComponent } from './app/pages/lite/lite-page.component';
bootstrapApplication(AppComponent, { providers: [provideRouter([{ path: '', component: HomePageComponent }, { path: 'lite', component: LitePageComponent }, { path: '**', redirectTo: '' }])] }).catch(console.error);

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(App,{
    providers: [
      provideAnimations(),
      importProvidersFrom(HttpClientModule),
      provideRouter(routes)
    ]
})
  .catch((err) => console.error(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppExercise1 } from './app/controls/exercise1/exercise1.module';
import { AppExercise2 } from './app/controls/exercise2/exercise2.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppExercise1)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppExercise2)
  .catch(err => console.error(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DataStore} from "@aws-amplify/datastore";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Auth } from '@aws-amplify/auth'
import Amplify from "@aws-amplify/core";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
DataStore.configure();
Auth.configure(awsExports)


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

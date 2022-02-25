import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxKeycloakClientModule } from 'ngx-keycloak-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxKeycloakClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

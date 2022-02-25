import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NgxKeycloakClientComponent } from './ngx-keycloak-client.component';
import { initKeycloak } from './utils';



@NgModule({
  declarations: [
    NgxKeycloakClientComponent
  ],
  imports: [
    KeycloakAngularModule
  ],
  exports: [
    NgxKeycloakClientComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ]
})
export class NgxKeycloakClientModule { 

  constructor(@Optional() @SkipSelf() parentModule?: NgxKeycloakClientModule) {
    if (parentModule) {
      throw new Error(
        'NgxKeycloakClientModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config?: any): ModuleWithProviders<NgxKeycloakClientModule> {
    return {
      ngModule: NgxKeycloakClientModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initKeycloak,
          multi: true,
          deps: [KeycloakService]
        }
      ]
    }
  }
}

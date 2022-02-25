import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxKeycloakClientComponent } from './ngx-keycloak-client.component';
import { initKeycloak } from './utils';



@NgModule({
  declarations: [
    NgxKeycloakClientComponent
  ],
  imports: [
  ],
  exports: [
    NgxKeycloakClientComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initKeycloak,
      multi: true
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
          useFactory: () => initKeycloak,
          multi: true
        }
      ]
    }
  }
}

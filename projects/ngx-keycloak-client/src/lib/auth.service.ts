import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloak: KeycloakService) {
   }

  login(): void {
    this.keycloak.login();
  }
  
  logout(): void {
    this.keycloak.logout();
  }

  isAuthenticated(): boolean {
    return this.keycloak.getKeycloakInstance().authenticated ?? false;
  }

  isLoggedIn() {
    return this.keycloak.isLoggedIn();
  }

  getToken() {
    return this.keycloak.getToken();
  }
  


}

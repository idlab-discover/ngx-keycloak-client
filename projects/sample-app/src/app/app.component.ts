import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ngx-keycloak-client';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sample-app';
  loggedIn: boolean | null = null;
  token: string | null = null;

  constructor(public auth: AuthService, public keycloak: KeycloakService) {
  }

  ngOnInit(): void {
    this.auth.isLoggedIn().then(ok => this.loggedIn = ok);
    this.auth.getToken().then(tok => this.token = tok);
  }


}

import { Component } from '@angular/core';
import { AuthService } from 'ngx-keycloak-client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';

  constructor(private auth: AuthService) {
    console.log(auth.sayHello());
  }
}

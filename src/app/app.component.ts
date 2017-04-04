import { Component } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {KeycloakService} from './keycloak-service/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http, private kc: KeycloakService) {
  }
  title = 'app works!';
}

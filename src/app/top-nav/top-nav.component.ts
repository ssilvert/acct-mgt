import { Component, OnInit } from '@angular/core';

import {KeycloakService} from '../keycloak-service/keycloak.service'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
  }
  
  logout() {
      this.keycloakService.logout();
  }

}

/// <reference path="keycloak.d.ts"/>

import {Injectable} from '@angular/core';

//import { environment } from '../../environments/environment';

//import keycloakJson from '../../assets/keycloak.json';

//import IKeycloak from KeycloakModule;

//import  "./keycloak";

var Keycloak = require("./keycloak");

type KeycloakClient = KeycloakModule.KeycloakClient;

class Auth {
    loggedIn: boolean;
    authz: KeycloakClient;
    logoutUrl: string;
}

@Injectable()
export class KeycloakService {
  static auth: Auth = new Auth();
  static keycloakAuth: KeycloakClient;

  static init(): Promise<any> {
    //alert(JSON.stringify(keycloakJson));
    /*const keycloakAuth: KeycloakClient = Keycloak({
      url: 'http://localhost:8080/auth',
      realm: 'foo',
      clientId: 'account-ng2',
    });*/
    
    //const keycloakAuth: KeycloakClient = Keycloak('assets/keycloak.json');
    KeycloakService.keycloakAuth = Keycloak('assets/keycloak.json');
    
    KeycloakService.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      KeycloakService.keycloakAuth.init({ onLoad: 'login-required' })
      .success(() => {
        KeycloakService.auth.loggedIn = true;
        KeycloakService.auth.authz = KeycloakService.keycloakAuth;
        KeycloakService.auth.logoutUrl = KeycloakService.keycloakAuth.authServerUrl
          + '/realms/master/protocol/openid-connect/logout?redirect_uri='
          + document.baseURI;
        resolve();
      })
      .error(() => {
        reject();
      });
    });
  }

  logout() {
    console.log('*** LOGOUT');
    //KeycloakService.auth.loggedIn = false;
    //KeycloakService.auth.authz = null;

    //KeycloakService.keycloakAuth.updateToken({redirectUri: "http://localhost:8080/auth/realms/master/account"});
    //window.location.href = KeycloakService.auth.logoutUrl;
    KeycloakService.keycloakAuth.logout();
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakService.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}

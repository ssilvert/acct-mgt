import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KeycloakService } from './keycloak-service/keycloak.service';
import { KeycloakHttp,KEYCLOAK_HTTP_PROVIDER } from './keycloak-service/keycloak.http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccountPageComponent } from './content/account-page/account-page.component';
import { PasswordPageComponent } from './content/password-page/password-page.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthenticatorPageComponent } from './content/authenticator-page/authenticator-page.component';
import { SessionsPageComponent } from './content/sessions-page/sessions-page.component';
import { ApplicationsPageComponent } from './content/applications-page/applications-page.component';

const routes: Routes = [
    { path: 'account', component: AccountPageComponent },
    { path: 'password', component: PasswordPageComponent },
    { path: 'authenticator', component: AuthenticatorPageComponent },
    { path: 'sessions', component: SessionsPageComponent },
    { path: 'applications', component: ApplicationsPageComponent },
    { path: '', redirectTo: '/account', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    AccountPageComponent,
    PasswordPageComponent,
    PageNotFoundComponent,
    AuthenticatorPageComponent,
    SessionsPageComponent,
    ApplicationsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

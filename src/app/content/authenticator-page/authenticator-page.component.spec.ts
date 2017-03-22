import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatorPageComponent } from './authenticator-page.component';

describe('AuthenticatorPageComponent', () => {
  let component: AuthenticatorPageComponent;
  let fixture: ComponentFixture<AuthenticatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

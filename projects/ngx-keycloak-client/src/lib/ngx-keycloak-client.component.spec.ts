import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKeycloakClientComponent } from './ngx-keycloak-client.component';

describe('NgxKeycloakClientComponent', () => {
  let component: NgxKeycloakClientComponent;
  let fixture: ComponentFixture<NgxKeycloakClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKeycloakClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeycloakClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

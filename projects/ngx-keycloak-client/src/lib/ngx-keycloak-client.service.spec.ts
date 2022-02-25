import { TestBed } from '@angular/core/testing';

import { NgxKeycloakClientService } from './ngx-keycloak-client.service';

describe('NgxKeycloakClientService', () => {
  let service: NgxKeycloakClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKeycloakClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

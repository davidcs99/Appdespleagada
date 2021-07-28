import { TestBed } from '@angular/core/testing';

import { Producto2Service } from './Producto2.service';

describe('CrudService', () => {
  let service: Producto2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Producto2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

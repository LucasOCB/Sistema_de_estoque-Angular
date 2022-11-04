import { TestBed } from '@angular/core/testing';

import { ApiProdutosService } from './api-produtos.service';

describe('ApiProdutosService', () => {
  let service: ApiProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

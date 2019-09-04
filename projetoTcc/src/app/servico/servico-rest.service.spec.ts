import { TestBed } from '@angular/core/testing';

import { ServicoRestService } from './servico-rest.service';

describe('ServicoRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoRestService = TestBed.get(ServicoRestService);
    expect(service).toBeTruthy();
  });
});

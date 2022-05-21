import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('teste do obserbable loading', ()=>{

    it('show', ()=>{
      service.show();
      service.loading.subscribe(data=>{
        expect(data).toBeTrue();
      });
    });

    it('show', ()=>{
      service.hide();
      service.loading.subscribe(data=>{
        expect(data).toBeFalsy();
      });
    });

  })

});

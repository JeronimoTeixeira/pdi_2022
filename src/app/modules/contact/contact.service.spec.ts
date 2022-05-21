import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            post: ()=>{return of("sucesso")}
          }
        }
      ]

    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('teste na chamada da API topMusic', ()=>{

    it('topMusicas sucesso', ()=>{
      service.contact({
        message: "Olá tudo bem",
        email: "teste@gmail.com"
      }
      ).subscribe( data =>{
        expect(data).toEqual("sucesso")
      })
    });


  });

});

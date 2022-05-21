import { TestBed } from '@angular/core/testing';

import { TopMusicService } from './top-music.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopMusicas } from 'src/app/shared/models/top-musicas.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
describe('TopMusicService', () => {
  let service: TopMusicService;
  let httpMock: HttpTestingController;

  let mockMusica = new Object({
    position: 1,
    thumbnail: 'Top 1 Musica',
    track_title: "Titulo",
    artists: "Artista",
    track_url: "http://teste.com",
    track_id: "321312"
  })

  let expectMusic = new Array<TopMusicas>(new TopMusicas(mockMusica),new TopMusicas(mockMusica))

  let mockMusicas = new Array<Object>(mockMusica, mockMusica)


  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: ()=>{return of({ content: mockMusicas })}
          }
        }
      ]

    });
    service = TestBed.inject(TopMusicService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('teste na chamada da API topMusic', ()=>{

    it('topMusicas sucesso', ()=>{
      service.topMusicas().subscribe( (topMusicas:Array<TopMusicas>) =>{
        expect(topMusicas).toEqual(expectMusic)
      })
    });


  });


});

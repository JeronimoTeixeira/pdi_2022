import { TestBed } from '@angular/core/testing';

import { TopMusicService } from './top-music.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('TopMusicService', () => {
  let service: TopMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(TopMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

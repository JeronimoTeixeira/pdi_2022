import { TestBed } from '@angular/core/testing';

import { TopMusicService } from './top-music.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
describe('TopMusicService', () => {
  let service: TopMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(TopMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TopMusicService } from './top-music.service';

describe('TopMusicService', () => {
  let service: TopMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

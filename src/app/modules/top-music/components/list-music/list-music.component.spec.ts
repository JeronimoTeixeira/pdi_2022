import { TopMusicas } from 'src/app/shared/models/TopMusicas.model';
import { TopMusicService } from './../../top-music.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicComponent } from './list-music.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListMusicComponent', () => {
  let component: ListMusicComponent;
  let fixture: ComponentFixture<ListMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListMusicComponent ],
      providers:[
        {
          provide: TopMusicService,
          useVale: {
            topMusicas: of("teste")
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

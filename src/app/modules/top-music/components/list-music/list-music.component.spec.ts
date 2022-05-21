import { TopMusicas } from 'src/app/shared/models/top-musicas.model';
import { TopMusicService } from './../../top-music.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMusicComponent } from './list-music.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingService } from 'src/app/shared/shared/services/loading.service';
import { NotificationService } from 'src/app/shared/shared/services/notification.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


describe('ListMusicComponent', () => {
  let component: ListMusicComponent;
  let fixture: ComponentFixture<ListMusicComponent>;
  const mockUserService = jasmine.createSpyObj("TopMusicService", ["topMusicas"]);

  let mockMusica1 = new TopMusicas({
    position: 1,
    thumbnail: 'Top 1 Musica',
    track_title: "Titulo",
    artists: "Artista",
    track_url: "http://teste.com",
    track_id: "321312"
  })


  let mockMusica2 = new TopMusicas({
    position: 1,
    thumbnail: 'Top 1 Musica',
    track_title: "Titulo",
    artists: "Artista",
    track_url: "http://teste.com",
    track_id: "321312"
  })

  let mockMusicas = new Array<TopMusicas>(mockMusica1, mockMusica2)

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        HttpClientTestingModule,
        MatGridListModule
      ],
      declarations: [ ListMusicComponent ],
      providers:[
        {
          provide: TopMusicService,
          useValue:{
            topMusicas: () => {return of(mockMusicas)}
          } 
        },
        {
          provide: LoadingService,
          useValue: {
            show: ()=>{},
            hide: ()=>{}
          }
        },
        {
          provide: NotificationService,
          useValue: {
            showError: ()=>{}
          }
        }
      ]
    })
    .compileComponents();
    mockUserService.topMusicas.and.returnValue(
      of(mockMusicas)
    );
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

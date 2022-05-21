import { TopMusicas } from 'src/app/shared/models/top-musicas.model';
import { TopMusicService } from './../../top-music.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMusicComponent } from './list-music.component';
import { of, throwError } from 'rxjs';
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
  const mockTopMusicaService = jasmine.createSpyObj("TopMusicService", ["topMusicas"]);
  const espiaoNotificationService = jasmine.createSpyObj("NotificationService", ["showError"])


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
        HttpClientTestingModule
      ],
      declarations: [ ListMusicComponent ],
      providers:[
        {
          provide: TopMusicService,
          useValue: mockTopMusicaService
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
          useValue: espiaoNotificationService
        }
      ]
    })
    .compileComponents();
    mockTopMusicaService.topMusicas.and.returnValue(
      of(mockMusicas)
    );
    espiaoNotificationService.showError.and.returnValue()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('teste função buscar', ()=>{

    it('sucesso', ()=>{
      component.buscar();
      expect(component.top5Music).toEqual(mockMusicas)
    });
    
    it('error', ()=>{
      mockTopMusicaService.topMusicas.and.returnValue(
        throwError("erro")
      );
      component.buscar();
      expect(espiaoNotificationService.showError).toHaveBeenCalled();
    });


  });

  describe('teste função onResize', ()=>{

    it('window.innerWidth <= 850', ()=>{
      spyOnProperty(window, 'innerWidth', 'get').and.returnValue(100);
      component.onResize();
      component.onResize();
      expect(component.visualizaColocacaoLogoSpotify).toBeFalsy();
      expect(component.breakpoint).toEqual(1);
      expect(component.colSpanInfo).toEqual(1);
      expect(component.rowSpanInfo).toEqual(1);
    });

    it('window.innerWidth > 850', ()=>{

      spyOnProperty(window, 'innerWidth', 'get').and.returnValue(1000);
      component.onResize();
      expect(component.visualizaColocacaoLogoSpotify).toBeTrue();
      expect(component.breakpoint).toEqual(10);
      expect(component.colSpanInfo).toEqual(5);
      expect(component.rowSpanInfo).toEqual(1);
    });

  })


});

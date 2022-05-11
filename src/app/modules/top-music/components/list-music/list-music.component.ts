import { TopMusicas } from 'src/app/shared/models/TopMusicas.model';
import { LoadingService } from './../../../../shared/shared/services/loading.service';
import { TopMusicService } from './../../top-music.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/shared/services/notification.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {
  loading = this.loadingService.loading;
  top5Music: Array<any> = [];
  spinner: Boolean = true;
  breakpoint: number = 10;
  colSpanInfo: number = 5;
  rowSpanInfo: number = 1;
  visualizaColocacaoLogoSpotify: boolean = true;

  constructor(
    private topMusicService: TopMusicService,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  ) {
    this.buscar();
    this.onResize()

  }

  ngOnInit(): void {
  }

  buscar(){
    this.loadingService.show();
    this.topMusicService.topMusicas().subscribe( (topMusicas:Array<TopMusicas>) =>{
      this.top5Music = topMusicas.slice(0, 5);
      console.log(this.top5Music)
      this.loadingService.hide();
    }, err =>{
      this.loadingService.hide();
      this.notificationService.showError("Putz!! Algo deu errado, mas verei isso em breve!!", "Algo deu Errado");
    });
  }

  onResize(event?: any) {
    this.visualizaColocacaoLogoSpotify = (window.innerWidth <= 850) ? false : true;
    this.breakpoint = (window.innerWidth <= 850) ? 1 : 10;
    this.colSpanInfo = (window.innerWidth <= 850) ? 1 : 5;
    this.rowSpanInfo = (window.innerWidth <= 850) ? 1 : 1;
  }

}

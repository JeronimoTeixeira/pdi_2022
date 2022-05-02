import { TopMusicas } from 'src/app/shared/models/TopMusicas.model';
import { LoadingService } from './../../../../shared/shared/services/loading.service';
import { TopMusicService } from './../../top-music.service';
import { Component, OnInit } from '@angular/core';

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
    private loadingService: LoadingService
  ) {

  }

  ngOnInit(): void {
    this.onResize()
    this.buscar();
  }

  buscar(){
    this.loadingService.show();
    this.topMusicService.topMusicas().subscribe( (topMusicas:Array<TopMusicas>) =>{
      this.top5Music = topMusicas.slice(0, 5);
      this.loadingService.hide();
    });
  }

  onResize(event?: any) {
    this.visualizaColocacaoLogoSpotify = (window.innerWidth <= 850) ? false : true;
    this.breakpoint = (window.innerWidth <= 850) ? 1 : 10;
    this.colSpanInfo = (window.innerWidth <= 850) ? 1 : 5;
    this.rowSpanInfo = (window.innerWidth <= 850) ? 1 : 1;
  }

}

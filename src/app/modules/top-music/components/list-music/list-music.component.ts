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
  breakpoint: Number = 10;

  constructor(
    private topMusicService: TopMusicService,
    private loadingService: LoadingService
  ) {

  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    this.buscar();
  }

  buscar(){
    this.loadingService.show();
    this.topMusicService.topMusicas().subscribe( (data:any) =>{
      this.spinner = false
      this.top5Music = data.content.slice(0, 5);
      console.log(this.top5Music);
      this.loadingService.hide();
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 3 : 10;
  }

}

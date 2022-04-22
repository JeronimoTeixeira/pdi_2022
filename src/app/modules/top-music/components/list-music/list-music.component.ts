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

  constructor(
    private topMusicService: TopMusicService,
    private loadingService: LoadingService
  ) {

  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    console.log('Buscar')
    this.loadingService.show();
    this.topMusicService.topMusicas().subscribe( (data:any) =>{
      this.spinner = false
      this.top5Music = data.content.slice(0, 5);
      console.log(this.top5Music);
      this.loadingService.hide();
    });
  }

}

export class TopMusicas {
  posicao: number;
  thumbnail: string;
  titulo: string;
  artistas: Array<string>;
  url: string;
  id: string;

  constructor(obj: any){
    this.posicao = obj.position;
    this.thumbnail = obj.thumbnail;
    this.titulo = obj.track_title;
    this.artistas = obj.artists;
    this.url = obj.track_url;
    this.id = obj.track_id;
  }
}

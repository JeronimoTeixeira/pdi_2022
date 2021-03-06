import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMusicComponent } from './components/list-music/list-music.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

export const routes: Routes = [
  { path: '', component: ListMusicComponent},
];

@NgModule({
  declarations: [ListMusicComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class TopMusicModule { }

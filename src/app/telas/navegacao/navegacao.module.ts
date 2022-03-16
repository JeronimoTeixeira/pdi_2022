import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { TelaComponent } from './tela/tela.component';
import { RouterModule, Routes } from '@angular/router';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

export const routes: Routes = [
  { path: '', component: TelaComponent },
];

@NgModule({
  declarations: [MenuComponent, BarraPesquisaComponent, TelaComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class NavegacaoModule { }

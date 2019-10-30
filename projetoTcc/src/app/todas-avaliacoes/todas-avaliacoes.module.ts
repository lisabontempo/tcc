import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodasAvaliacoesPage } from './todas-avaliacoes.page';

const routes: Routes = [
  {
    path: '',
    component: TodasAvaliacoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodasAvaliacoesPage]
})
export class TodasAvaliacoesPageModule {}

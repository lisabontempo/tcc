import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'nps', loadChildren: './nps/nps.module#NpsPageModule' },
  { path: 'todas-avaliacoes', loadChildren: './todas-avaliacoes/todas-avaliacoes.module#TodasAvaliacoesPageModule' },
  { path: 'avaliacao', loadChildren: './avaliacao/avaliacao.module#AvaliacaoPageModule' },
  { path: 'avaliar', loadChildren: './avaliar/avaliar.module#AvaliarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

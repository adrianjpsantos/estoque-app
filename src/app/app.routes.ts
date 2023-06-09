import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadComponent: () => import('./lista-produtos/lista-produtos.page').then( m => m.ListaProdutosPage)
  },
  {
    path: 'criar-cliente',
    loadComponent: () => import('./create-client/create-client.page').then( m => m.CreateClientPage)
  },
  {
    path: 'criar-produto',
    loadComponent: () => import('./create-produto/create-produto.page').then( m => m.CreateProdutoPage)
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./update-produto/update-produto.page').then( m => m.UpdateProdutoPage)
  },
  {
    path: 'cliente/:id',
    loadComponent: () => import('./update-cliente/update-cliente.page').then( m => m.UpdateClientePage)
  },



];

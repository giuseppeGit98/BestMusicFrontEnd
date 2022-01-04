import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlbumComponent } from './lista-album/lista-album.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { AcquistiUtenteComponent } from './acquisti-utente/acquisti-utente.component';
import{ ProfiloComponent} from './profilo/profilo.component';


const routes: Routes = [
  {
    path:'albums',
    component: ListaAlbumComponent
  },
  {
    path:'carrello',
    component: CarrelloComponent
  },
  {
    path:'purchases',
    component:AcquistiUtenteComponent
  },
  {
    path:'profilo',
    component:ProfiloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

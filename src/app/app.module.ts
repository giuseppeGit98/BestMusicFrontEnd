import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { UtenteService } from './services/utenteService/utente.service';
import { AlbumService } from './services/albumService/album.service';
import { CarrelloService } from './services/carrelloService/carrello.service';
import { AcquistoService } from './services/acquistoService/acquisto.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import{HomeComponent} from '../app/home/home.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import{FormsModule} from '@angular/forms';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaAlbumComponent } from './lista-album/lista-album.component';
import { AcquistoComponent } from './acquisto/acquisto.component';
import { AlbumInAcquistoComponent } from './album-in-acquisto/album-in-acquisto.component';
import { MatListModule } from '@angular/material/list';
import { AcquistiUtenteComponent } from './acquisti-utente/acquisti-utente.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CarrelloComponent } from './carrello/carrello.component';
import { LineaCarrelloComponent } from './linea-carrello/linea-carrello.component';
import { ProfiloComponent } from './profilo/profilo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumItemComponent,
    ListaAlbumComponent,
    AcquistoComponent,
    AlbumInAcquistoComponent,
    AcquistiUtenteComponent,
    CarrelloComponent,
    LineaCarrelloComponent,
    ProfiloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatListModule,
    MatTabsModule,

  ],
  providers: [{provide:UtenteService,useClass:UtenteService},{provide:AlbumService,useClass:AlbumService},{provide:CarrelloService,useClass:CarrelloService},{provide:AcquistoService,useClass:AcquistoService}],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { Utente } from './model/utenteModel/utente';
import{UtenteService} from './services/utenteService/utente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BestMusic';
  isAuthenticated: boolean;
  utente: Utente | undefined;

  constructor(public oktaAuth: OktaAuthService, private utenteService: UtenteService,public router:Router) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    this.utente= new Utente();
    const userClaims = await this.oktaAuth.getUser();
    if(userClaims != null && userClaims.preferred_username != undefined && userClaims.name != undefined){
      this.utente.email = userClaims.preferred_username;
      this.utente.nome = userClaims.name?.split(" ")[0];
      this.utente.cognome = userClaims.name?.split(" ")[1];
      this.utenteService.registraUtente(this.utente).subscribe();
    }

  }
  rout(s: string){
    this.router.navigate(["/" + s]);
  }


}

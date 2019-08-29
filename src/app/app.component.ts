import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { trigger, transition, group, query, style, animate} from '@angular/animations';
import {Clientservice} from "./clientservices/clientservice";
import {AppService} from "./app.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Service} from "./service/service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 3 => 2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute'})),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  services: Service[];
  clientservices: Clientservice[];
  ladate=new Date();
  dtm = new Number;
  dtd= new Number;
  dt=new Date();
  chaine=new String;
  listOfServicesSent = 0;
  constructor(private tokenStorage: TokenStorageService,
              private appService: AppService,
              private location: Location,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.appService.getClientServices().then(clientservices => this.clientservices  = clientservices );
    this.appService.getServices().then(services => this.services = services);

  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  rEve(){
    for (let clientservice of this.clientservices){
      if ((clientservice.relanceEveNational == true) &&
        ( //(this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "23/8") ||
             (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "14/1")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "20/3")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "9/4")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "1/5")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "25/7")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "13/8")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "15/10")
        ))
      {
        this.toastr.info("Rappel pour le service: "+clientservice.service.nom+"."
          +" Il faut contacter M/Mme "+clientservice.client.name+" en utilisant les moyens de contact suivants: "+clientservice.moyenContact
          +". Remarque: "+clientservice.remarque+".",
          'Notification (Relance suite à un évènement national)', { timeOut: 0 });
      }
      if ((clientservice.relanceEveReligieux == true) &&
        ( //(this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "23/8") ||
             (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "1/1")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "5/6")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "11/8")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "1/9")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "9/11")
          || (this.ladate.getDate()+"/"+(this.ladate.getMonth()+1) === "25/12")
        ))
      {
        this.toastr.info("Rappel pour le service: "+clientservice.service.nom+"."
          +" Il faut contacter M/Mme "+clientservice.client.name+" en utilisant les moyens de contact suivants: "+clientservice.moyenContact
          +". Remarque: "+clientservice.remarque+".",
          'Notification (Relance suite à un évènement religieux)', { timeOut: 0 });
      }
      if (clientservice.relanceanniversaire == true) {

      this.dt = new Date(clientservice.client.dateDeNaissance);
      this.dtm = this.dt.getMonth()+1;
      this.dtd = this.dt.getDate();
      if ((this.ladate.getMonth()+1)+"-"+this.ladate.getDate() === this.dtm+"-"+this.dtd)
      {
        this.toastr.info("Rappel pour le service: "+clientservice.service.nom+"."
          +" Il faut contacter M/Mme "+clientservice.client.name+" en utilisant les moyens de contact suivants: "+clientservice.moyenContact
          +". Remarque: "+clientservice.remarque+".",
          'Notification (Relance suite à un anniversaire)', { timeOut: 0 });
      }
      }
    }


  }

  sendListOfServices(){

    if ( (this.ladate.getDay() === 1) && (this.listOfServicesSent === 0)
      //&& (this.ladate.getHours() === 12)
      //&& (this.ladate.getMinutes() === 0)
      //&& (this.ladate.getSeconds() === 0)
       )
    {
      for (let service of this.services) {
        this.chaine = this.chaine.concat("Nom du service : ", service.nom, " / Type de service : ",
          service.type, " / Description du service : ", service.description + ".");
      }
      this.appService.sendMailOfServices(this.chaine).then(() => null);
      this.listOfServicesSent = 1;
    }

    if (this.ladate.getDay() != 1)
    {
      this.listOfServicesSent = 0;
    }
  }
}


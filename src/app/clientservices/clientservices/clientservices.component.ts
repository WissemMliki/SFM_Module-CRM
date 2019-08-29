import { Client } from './../../clients/client';
import { ClientserviceService } from './../clientservice.service';
import { Component, OnInit } from '@angular/core';
import { Clientservice } from '../clientservice';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ClientService } from '../../clients/client.service';



@Component({
  selector: 'app-clientservices',
  templateUrl: './clientservices.component.html',
  styleUrls: ['./clientservices.component.css']
})
export class ClientservicesComponent implements OnInit {
  showNull= false;
  clientservices: Clientservice[];
  client= new Client;
  headers=['Service','Date de début', 'Date de fin', 'Moyens de contact',
  'Remarque', 'Relance Eve_National','Relance Eve_Religieux','Relance anniversaire', 'Supprimer'];

  constructor(private clientserviceService: ClientserviceService,
              private clientService1: ClientService,
              private location: Location,
              private route: ActivatedRoute
              ){
                      }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.clientserviceService.getClientservices(+params['id']))
    .subscribe(clientservice => this.clientservices = clientservice);
    this.route.params
    .switchMap((params: Params) => this.clientService1.getClient(+params['id']))
    .subscribe(client => this.client = client);

   }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }


  delete(clientId: number, serviceId: number): void {
    console.log("delete");
    this.clientserviceService.delete(clientId, serviceId).then(() => window.location.reload());
  }



}

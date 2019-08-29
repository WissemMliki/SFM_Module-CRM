import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client= new Client;
  headers=['Id', 'Name', 'Nationalité', 'Date de naissance', 'Ville', 'Rue', 'Code postale',
  'Numéro de téléphone', 'numéro de Fax', 'Email', 'Facebook', 'Twitter', 'Skype','Service offert', 'Services', 'Supprimer', 'Modifier'];
  clients: Client[];
  constructor(private clientService: ClientService) {
   }
  ngOnInit() {
return this.clientService.getClients().then(clients => this.clients = clients);
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
  delete(id: number): void {
    console.log("delete");
    this.clientService.delete(id).then(() => window.location.reload());
  }

}

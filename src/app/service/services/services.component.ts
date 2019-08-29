import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Service } from '../service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']

    })

export class ServicesComponent implements OnInit {

  headers=['Id', 'Nom', 'Description', 'Type', 'Numéro de réference', 'Date de création', 'Service principal', 'Supprimer', 'Modifier'];
  services: Service[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    return this.servicesService.getServices().then(services => this.services = services);
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  delete(id: number): void {
    console.log("delete");
    this.servicesService.delete(id).then(() => window.location.reload());
  }


}

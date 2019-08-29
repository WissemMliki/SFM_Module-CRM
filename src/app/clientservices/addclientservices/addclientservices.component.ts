import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Client } from './../../clients/client';
import { Service } from './../../service/service';
import { ClientserviceService } from './../clientservice.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Clientservice } from '../clientservice';
import { ServicesService } from '../../service/services.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../clients/client.service';

@Component({
  selector: 'app-addclientservices',
  templateUrl: './addclientservices.component.html',
  styleUrls: ['./addclientservices.component.css']
})
export class AddclientservicesComponent implements OnInit {
  formVisible= false;
  clientservice = new Clientservice;
  clientH = new Client;
  services: Service[];
  serviceD: Service;
  hdForm: FormGroup;
  headers=['Id', 'Nom', 'Description', 'Type', 'Numéro de réference', 'Date de création', 'Service principal', 'Attribuer ce service'];
  constructor(private clientserviceService: ClientserviceService,
              private clientService: ClientService,
              private servicesService: ServicesService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) {
                this.hdForm = fb.group({
                    dateDebut: ['', Validators.required],
                    dateFin: ['', Validators.required]
                },
                {validator: this.endDateAfterOrEqualValidator});
               }
               endDateAfterOrEqualValidator(formGroup): any {
                var startDateTimestamp, endDateTimestamp;
                for(var controlName in formGroup.controls) {
                  if(controlName.indexOf("dateDebut") !== -1) {
                    startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
                  }
                  if(controlName.indexOf("dateFin") !== -1) {
                    endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
                  }
                }
                return (endDateTimestamp <= startDateTimestamp) ? { endDateLessThanStartDate: true } : null;
              }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.clientService.getClient(+params['id']))
      .subscribe(clientH => this.clientH = clientH);
    return this.servicesService.getServices().then(services => this.services = services);
  }

  private save(clientId: number, serviceId: number): void {
    this.clientserviceService.create(this.clientservice, clientId, serviceId).then(() => this.goBack());
  }

  onSubmit(clientHId: number, serviceDId: number) {
    this.save(clientHId, serviceDId);
  }

  selectService(serviceD: Service){
    this.serviceD = serviceD;
    console.log(serviceD);
    this.formVisible = true;
  }

 goBack(): void {
    this.location.back();
  }

}




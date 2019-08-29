import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Service } from '../service';
import { FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

service=new Service;
services: Service[];
rForm: FormGroup;
  constructor(private servicesService: ServicesService,
              private location: Location,
              private fb: FormBuilder) {
                this.rForm = this.fb.group({
                  nom          : ['', [Validators.required]],
                  description        : ['', [Validators.required]],
                  type          : ['', [Validators.required]],
                  numeroReference : ['', [Validators.required]]
                });
                 }

  ngOnInit() {
            return this.servicesService.getServices().then(services => this.services = services);
  }

  private save(): void {
    this.servicesService.create(this.service);
    this.servicesService.sendMails("Nom du service : "+this.service.nom+" / Type de service : "+this.service.type
      +" / Description du service : "+this.service.description+".")
      .then(() => this.goBack());
  }
  onSubmit() {
    this.save();
  }

 goBack(): void {
    this.location.back();
  }



}

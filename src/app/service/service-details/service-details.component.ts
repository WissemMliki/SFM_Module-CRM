import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Service } from '../service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  rForm: FormGroup;
  service = new Service();
  submitted = false;
  constructor(private servicesService: ServicesService,
    private route: ActivatedRoute,
    private location: Location) {
    this.rForm = new FormGroup({
      'nom': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'type': new FormControl('', [Validators.required]),
      'numeroReference': new FormControl('', [Validators.required])
   })

     }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.servicesService.getService(+params['id']))
    .subscribe(service => this.service = service);
  }

  onSubmit(): void {
    this.submitted = true;
    this.servicesService.update(this.service).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

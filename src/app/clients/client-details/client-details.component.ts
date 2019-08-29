import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  rForm: FormGroup;
  client = new Client();
  submitted = false;
  constructor(private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location){
  this.rForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'nationalite': new FormControl('', [Validators.required]),
    'ville': new FormControl('', [Validators.required]),
    'rue': new FormControl('', [Validators.required]),
    'codePostale': new FormControl('', [Validators.required]),
    'numeroTelephone': new FormControl('', [Validators.required]),
    'numeroFax': new FormControl('', [Validators.required]),
    'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
    'facebook': new FormControl('', [Validators.required]),
    'twitter': new FormControl('', [Validators.required]),
    'skype': new FormControl('', [Validators.required])
  })
     }
  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.clientService.getClient(+params['id']))
    .subscribe(client => this.client = client);
  }
  onSubmit(): void {
    this.submitted = true;
    this.clientService.updateClientRequest(this.client).then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}


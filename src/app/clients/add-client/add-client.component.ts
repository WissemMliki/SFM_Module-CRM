import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Location } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  rForm: FormGroup;
  client = new Client();
  submitted = false;
  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) {
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
  }
  private save(): void {
    this.clientService.create(this.client).then(() => this.goBack());
  }
  onSubmit() {
    this.save();
     }
 goBack(): void {
    this.location.back();
    window.location.reload;
  }
}

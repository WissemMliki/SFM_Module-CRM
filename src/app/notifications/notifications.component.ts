import { Component, OnInit } from '@angular/core';
import {Clientservice} from "../clientservices/clientservice";
import {NotificationsService} from "./notifications.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  clientservices: Clientservice[];
  showNull= false;
  headers=['Service','Date de début', 'Date de fin', 'Moyens de contact',
    'Remarque', 'Relance Eve_National','Relance Eve_Religieux','Relance anniversaire'];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.notificationsService.getClientServices().then(clientservices => this.clientservices  = clientservices );
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}

import {Clientservice} from './clientservice';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientserviceService {
  constructor(private http: Http) { }
  private clientservicesUrl = 'http://localhost:8080/api/clientservices'
  private headers = new Headers({'Content-Type': 'application/json'});

  getClientservices(id :number): Promise<Clientservice[]>{
    const url = `${this.clientservicesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Clientservice[]);
  }

  getClientservice(id : number): Promise<Clientservice> {
    const url = `${this.clientservicesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Clientservice);
  }

  create(clientService: Clientservice, clientId: number, serviceId: number): Promise<Clientservice> {
    const url = `http://localhost:8080/api/clients/${clientId}/services/${serviceId}`
    return this.http.post(url, JSON.stringify(clientService), {headers: this.headers})
    .toPromise()
    .then(() => clientService);
  }

  delete(clientId: number, serviceId: number): Promise<void>{
    const url = `api/clients/${clientId}/services/${serviceId}`
    return this.http.delete(url)
    .toPromise()
    .then(() => null)
     }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http';
import {Client} from './client';
@Injectable()
export class ClientService {
  constructor(private http: Http) { }
  private clientsUrl = 'http://localhost:8080/api/clients';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();

  getClients(): Promise<Client[]> {
    return this.http.get(this.clientsUrl)
    .toPromise()
    .then(response => response.json() as Client[]);
  }

  getClient(id : number): Promise<Client>{
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Client);
  }

  create(client: Client): Promise<Client> {
    return this.http
    .post(this.clientsUrl, JSON.stringify(client), {headers: this.headers})
    .toPromise()
    .then(() => client)
    .catch(this.handleError);
  }

  updateClientRequest(client: Client): Promise<Client>{
    const url =`${this.clientsUrl}/${client.id}`;
    return this.http.put(url, JSON.stringify(client), {headers: this.headers})
    .toPromise()
    .then(() => client)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(() => null);
  }

  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
 }

}

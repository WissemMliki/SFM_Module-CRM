import { Service } from './service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ServicesService {

  constructor(private http: Http, private router: Router, private location: Location) { }

  private servicesUrl = 'http://localhost:8080/api/services';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();

  getServices(): Promise<Service[]> {
    return this.http.get(this.servicesUrl)
    .toPromise()
    .then(response => response.json() as Service[]);
  }

  getService(id : number): Promise<Service>{
    const url = `${this.servicesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Service);
  }

  sendMails(contenu: String): Promise<String> {
    return this.http.post('http://localhost:8080/api/mail-success', JSON.stringify(contenu), {headers: this.headers})
      .toPromise()
      .then(() => contenu)
      .catch(this.handleError);
  }

  update(service: Service): Promise<Service>{
    const url =`${this.servicesUrl}/${service.id}`;
    return this.http.put(url, JSON.stringify(service), {headers: this.headers})
    .toPromise()
    .then(() => service)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(() => null);
  }

  create(service: Service): Promise<Service> {
    return this.http
    .post(this.servicesUrl, JSON.stringify(service), {headers: this.headers})
    .toPromise()
    .then(() => service)
    .catch(this.handleError);
  }

  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
 }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http';
import {Clientservice} from "./notifications/clientservice";
import {Service} from "./service/service";


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();

  getClientServices(): Promise<Clientservice[]> {
    return this.http.get('http://localhost:8080/api/clientservices')
      .toPromise()
      .then(response => response.json() as Clientservice[]);
  }

  sendMailOfServices(contenu: String): Promise<String> {
    return this.http.post('http://localhost:8080/api/mail-success-listOfServices', JSON.stringify(contenu), {headers: this.headers})
      .toPromise()
      .then(() => contenu)
      .catch(this.handleError);
  }

  getServices(): Promise<Service[]> {
    return this.http.get('http://localhost:8080/api/services')
      .toPromise()
      .then(response => response.json() as Service[]);
  }
  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
  }

}

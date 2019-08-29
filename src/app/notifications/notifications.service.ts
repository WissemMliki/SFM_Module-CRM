import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http';
import {Clientservice} from "./clientservice";

@Injectable()
export class NotificationsService {
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();

  getClientServices(): Promise<Clientservice[]> {
    return this.http.get('http://localhost:8080/api/clientservices')
      .toPromise()
      .then(response => response.json() as Clientservice[]);
  }

  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
  }
}

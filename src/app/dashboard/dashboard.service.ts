import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http';

@Injectable()
export class DashboardService {
  constructor(private http: Http) { }
  private clientsUrl = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();

  getnumberOfActiveClients(): Promise<number>{
    const url = `${this.clientsUrl}/numberofclients`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getnumberOfActiveServices(): Promise<number>{
    const url = `${this.clientsUrl}/numberofservices`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getnumberOfActiveClientServices(): Promise<number>{
    const url = `${this.clientsUrl}/numberofclientservices`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getnumberOfClientsWithServices(): Promise<number>{
    const url = `${this.clientsUrl}/numberofclientswithservices`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getnombreDeRelanceEveNational(): Promise<number>{
    const url = `${this.clientsUrl}/nombredeRelanceEveNational`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }
  getnombreDeRelanceEveReligieux(): Promise<number>{
    const url = `${this.clientsUrl}/nombreDeRelanceEveReligieux`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }
  getnombreDeRelanceAnniversaire(): Promise<number>{
    const url = `${this.clientsUrl}/nombreDeRelanceAnniversaire`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getnombreDeRelances(): Promise<number>{
    const url = `${this.clientsUrl}/nombreDeRelances`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getpourcentageDeRelancesEveNational(): Promise<number>{
    const url = `${this.clientsUrl}/pourcentageRelancesEveNational`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getpourcentageDeRelancesEveReligieux(): Promise<number>{
    const url = `${this.clientsUrl}/pourcentageRelancesEveReligieux`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getpourcentageDeRelancesAnniversaire(): Promise<number>{
    const url = `${this.clientsUrl}/pourcentageRelancesAnniversaire`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getpourcentageClientsWithServices(): Promise<number>{
    const url = `${this.clientsUrl}/pourcentageClientsWithServices`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  getpourcentageClientsWithoutServices(): Promise<number>{
    const url = `${this.clientsUrl}/pourcentageClientsWithoutServices`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number);
  }

  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
  }

}

import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {Location} from '@angular/common';
import {ChartType, ChartOptions} from 'chart.js';
import {
  Label,
  monkeyPatchChartJsTooltip,
  monkeyPatchChartJsLegend
} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  numclients : number;
  numservices : number;
  numclientservices : number;
  numclientswithservices : number;
  numrelanceEveNational: number;
  numRelanceEveReligieux: number;
  numRelanceAnniversaire: number;
  somme:number;
  pourcentageEveNational: number;
  pourcentageEveReligieux: number;
  pourcentageAnniversaire: number;
  clientsWithServices: number;
  clientWithoutServices: number;

  constructor(private dashboardService: DashboardService,   private location: Location) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend(); }

  ngOnInit() {
   this.dashboardService.getnumberOfActiveClients().then(numclients => this.numclients  = numclients );
   this.dashboardService.getnumberOfActiveServices().then(numservices => this.numservices  = numservices );
    this.dashboardService.getnumberOfActiveClientServices().then(numclientservices => this.numclientservices  = numclientservices );
    this.dashboardService.getnumberOfClientsWithServices().then(numclientswithservices => this.numclientswithservices  = numclientswithservices );
    this.dashboardService.getnombreDeRelanceEveNational().then(numrelanceEveNational => this.numrelanceEveNational  = numrelanceEveNational );
    this.dashboardService.getnombreDeRelanceEveReligieux().then(numRelanceEveReligieux => this.numRelanceEveReligieux  = numRelanceEveReligieux );
    this.dashboardService.getnombreDeRelanceAnniversaire().then(numRelanceAnniversaire => this.numRelanceAnniversaire  = numRelanceAnniversaire );
    this.dashboardService.getnombreDeRelances().then(somme => this.somme  = somme );
    this.dashboardService.getpourcentageDeRelancesEveNational().then(pourcentageEveNational => this.pourcentageEveNational  = pourcentageEveNational );
    this.dashboardService.getpourcentageDeRelancesEveReligieux().then(pourcentageEveReligieux => this.pourcentageEveReligieux  = pourcentageEveReligieux );
    this.dashboardService.getpourcentageDeRelancesAnniversaire().then(pourcentageAnniversaire => this.pourcentageAnniversaire  = pourcentageAnniversaire );
    this.dashboardService.getpourcentageClientsWithServices().then(clientsWithServices => this.clientsWithServices  = clientsWithServices );
    this.dashboardService.getpourcentageClientsWithoutServices().then(clientWithoutServices => this.clientWithoutServices  = clientWithoutServices );
    this.dashboardService.getpourcentageDeRelancesEveNational().then(data => this.pieChartData[0]  = data as any );
    this.dashboardService.getpourcentageDeRelancesEveReligieux().then(data => this.pieChartData[1]  = data as any);
    this.dashboardService.getpourcentageDeRelancesAnniversaire().then(data => this.pieChartData[2]  = data as any);
    this.dashboardService.getpourcentageClientsWithServices().then(data => this.barChartData[0] = data );
    this.dashboardService.getpourcentageClientsWithoutServices().then(data => this.barChartData[1]  = data );
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  pieChartLabels =  ['% Relance suite à un évènement national',
    '% Relance suite à un évènement national religieux',
    ' % Relance suite à un anniversaire'];

  public  pieChartData:any[] = [
    {
      data: []
    }
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor:any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(255, 161, 181, 0.9)'
      ]
    }
  ]

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['% clients ayant des services', '% clients sans services '];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartColor:any = [
    {
      backgroundColor: ['rgb(255,0,0,0.8)',
        'rgb(0,128,0,0.8)'
      ]
    }
  ]
  public barChartData: any[] = [
    {
      data: []
    }
  ];

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

}

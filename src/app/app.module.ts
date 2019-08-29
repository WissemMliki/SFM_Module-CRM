import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard-details/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import 'core-js/es7/reflect';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HttpModule } from '@angular/http';
import { RouterLink } from '@angular/router';
import { ServicesService } from './service/services.service';
import { ServicesComponent } from './service/services/services.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './clients/clients/clients.component';
import { ClientService } from './clients/client.service';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { QuestionableBooleanPipe } from './shared/boolean';
import { ClientserviceService } from './clientservices/clientservice.service';
import { ClientservicedetailsComponent } from './clientservices/clientservicedetails/clientservicedetails.component';
import { ClientservicesComponent } from './clientservices/clientservices/clientservices.component';
import { AddclientservicesComponent } from './clientservices/addclientservices/addclientservices.component';
import {DashboardService} from './dashboard/dashboard.service';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { NotificationsComponent } from './notifications/notifications.component';
import {NotificationsService} from "./notifications/notifications.service";
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    AddServiceComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    QuestionableBooleanPipe,
    ClientservicedetailsComponent,
    ClientservicesComponent,
    AddclientservicesComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    ToastrModule.forRoot({
      closeButton: true,
    }
    )
  ],
  providers: [httpInterceptorProviders,ClientService, ServicesService, ClientserviceService, DashboardService, NotificationsService, AppService, RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }

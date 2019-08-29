import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard-details/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {ClientsComponent} from './clients/clients/clients.component';
import {ServicesComponent} from './service/services/services.component';
import {ServiceDetailsComponent} from './service/service-details/service-details.component';
import {AddServiceComponent} from './service/add-service/add-service.component';
import {AddClientComponent} from './clients/add-client/add-client.component';
import {ClientDetailsComponent} from './clients/client-details/client-details.component';
import {ClientservicesComponent} from './clientservices/clientservices/clientservices.component';
import {AddclientservicesComponent} from './clientservices/addclientservices/addclientservices.component';
import {NotificationsComponent} from "./notifications/notifications.component";

const routes: Routes = [

  {path:'clients', component: ClientsComponent, data: {title: 'clients', depth: 2}},
  {path: 'services', component: ServicesComponent, data: {title: 'services', depth: 2}},
  {path: 'services/detail/:id', component: ServiceDetailsComponent, data: {title:'details', depth: 3}},
  {path: 'services/add', component: AddServiceComponent, data: {title:'details', depth: 3}},
  {path: 'clients/add', component: AddClientComponent, data: {title:'details', depth: 3}},
  {path: 'clients/details/:id', component: ClientDetailsComponent, data: {title:'details of client', depth: 3}},
  {path: 'clients/:id/services', component: ClientservicesComponent, data: {title:'client services', depth: 3}},
  {path: 'clients/:id/services/add', component: AddclientservicesComponent, data: {title:'client services', depth: 3}},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

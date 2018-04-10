import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgentsComponent } from './components/agents/agents.component';
import { DriverComponent } from './components/driver/driver.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PagemonitoringComponent } from './components/pagemonitoring/pagemonitoring.component';
import { UsersComponent } from './components/users/users.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { AddagentComponent } from './components/agents/addagent/addagent.component';
import { DeleteagentComponent } from './components/agents/deleteagent/deleteagent.component';
import { UpdateagentComponent } from './components/agents/updateagent/updateagent.component';
import { AdddriverComponent } from './components/driver/adddriver/adddriver.component';
import { DeletedriverComponent } from './components/driver/deletedriver/deletedriver.component';
import { UpdatedriverComponent } from './components/driver/updatedriver/updatedriver.component';
import { CancledriverComponent } from './components/driver/cancledriver/cancledriver.component';
import { DriverhistoryComponent } from './components/driver/driverhistory/driverhistory.component';
import { DriverstatusComponent } from './components/driver/driverstatus/driverstatus.component';
import { ImagesComponent } from './components/pagemonitoring/images/images.component';
import { NotificationsComponent } from './components/pagemonitoring/notifications/notifications.component';
import { ViewdriversComponent } from './components/driver/viewdrivers/viewdrivers.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { DeleteuserComponent } from './components/users/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/users/updateuser/updateuser.component';
import { ViewusersComponent } from './components/users/viewusers/viewusers.component';
import { AddvehicleComponent } from './components/vehicles/addvehicle/addvehicle.component';
import { DeletevehicleComponent } from './components/vehicles/deletevehicle/deletevehicle.component';
import { UpdatevehicleComponent } from './components/vehicles/updatevehicle/updatevehicle.component';
import { ViewvehiclesComponent } from './components/vehicles/viewvehicles/viewvehicles.component';
import { VehiclestatusComponent } from './components/vehicles/vehiclestatus/vehiclestatus.component';
import { ViewagentsComponent } from './components/agents/viewagents/viewagents.component';
import { CanclevehicleComponent } from './components/vehicles/canclevehicle/canclevehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AgentsComponent,
    DriverComponent,
    PricingComponent,
    PagemonitoringComponent,
    UsersComponent,
    VehiclesComponent,
    BookingsComponent,
    AddagentComponent,
    DeleteagentComponent,
    UpdateagentComponent,
    AdddriverComponent,
    DeletedriverComponent,
    UpdatedriverComponent,
    CancledriverComponent,
    DriverhistoryComponent,
    DriverstatusComponent,
    ImagesComponent,
    NotificationsComponent,
    ViewdriversComponent,
    AdduserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    ViewusersComponent,
    AddvehicleComponent,
    DeletevehicleComponent,
    UpdatevehicleComponent,
    ViewvehiclesComponent,
    VehiclestatusComponent,
    ViewagentsComponent,
    CanclevehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

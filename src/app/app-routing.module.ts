import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AddagentComponent } from './components/agents/addagent/addagent.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DriverComponent } from './components/driver/driver.component';
import { PagemonitoringComponent } from './components/pagemonitoring/pagemonitoring.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UsersComponent } from './components/users/users.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { DeleteagentComponent } from './components/agents/deleteagent/deleteagent.component';
import { UpdateagentComponent } from './components/agents/updateagent/updateagent.component';
import { ViewagentsComponent } from './components/agents/viewagents/viewagents.component';
import { AdddriverComponent } from './components/driver/adddriver/adddriver.component';
import { DeletedriverComponent } from './components/driver/deletedriver/deletedriver.component';
import { CancledriverComponent } from './components/driver/cancledriver/cancledriver.component';
import { DriverhistoryComponent } from './components/driver/driverhistory/driverhistory.component';
import { DriverstatusComponent } from './components/driver/driverstatus/driverstatus.component';
import { UpdatedriverComponent } from './components/driver/updatedriver/updatedriver.component';
import { ViewdriversComponent } from './components/driver/viewdrivers/viewdrivers.component';
import { NotificationsComponent } from './components/pagemonitoring/notifications/notifications.component';
import { ImagesComponent } from './components/pagemonitoring/images/images.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { ViewusersComponent } from './components/users/viewusers/viewusers.component';
import { DeleteuserComponent } from './components/users/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/users/updateuser/updateuser.component';
import { AddvehicleComponent } from './components/vehicles/addvehicle/addvehicle.component';
import { DeletevehicleComponent } from './components/vehicles/deletevehicle/deletevehicle.component';
import { UpdatevehicleComponent } from './components/vehicles/updatevehicle/updatevehicle.component';
import { VehiclestatusComponent } from './components/vehicles/vehiclestatus/vehiclestatus.component';
import { ViewvehiclesComponent } from './components/vehicles/viewvehicles/viewvehicles.component';
import { CanclevehicleComponent } from './components/vehicles/canclevehicle/canclevehicle.component';


const routes:Routes=[
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'vehicle',
    component:VehiclesComponent,
    children:[
      {
        path:'',
        redirectTo:'vehicle',
        pathMatch:'full'
      },
      {
        path:'addvehicle',
        component:AddvehicleComponent
      },
      {
        path:'deletevehicle',
        component:DeletevehicleComponent
      },
      {
        path:'canclevehicle',
        component:CanclevehicleComponent
      },
      {
        path:'updatevehicle',
        component:UpdatevehicleComponent
      },
      {
        path:'vehiclestatus',
        component:VehiclestatusComponent
      },
      {
        path:'viewvehicles',
        component:ViewvehiclesComponent
      }
    ]
  },
  {
    path:'pricing',
    component:PricingComponent
  },
  {
    path:'users',
    component:UsersComponent,
    children:[
      {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
      },
      {
        path:'adduser',
        component:AdduserComponent
      },
      {
        path:'viewuser',
        component:ViewusersComponent
      },
      {
        path:'deleteuser',
        component:DeleteuserComponent
      },
      {
        path:'updateuser',
        component:UpdateuserComponent
      }
    ]
  },
  {
    path:'pagemonitoring',
    component:PagemonitoringComponent,
    children:[
      {
        path:'',
        redirectTo:'pagemonitoring',
        pathMatch:'full'
      },
      {
        path:'images',
        component:ImagesComponent
      },
      {
        path:'notifications',
        component:NotificationsComponent
      }
    ]
  },
  {
    path:'driver',
    component:DriverComponent,
    children:[
      {
        path:'',
        redirectTo:'driver',
        pathMatch:'full'
      },
      {
        path:'adddriver',
        component:AdddriverComponent
      },
      {
        path:'deletedriver',
        component:DeletedriverComponent
      },
      {
        path:'cancledriver',
        component:CancledriverComponent
      },
      {
        path:'driverhistory',
        component:DriverhistoryComponent
      },
      {
        path:'driverstatus',
        component:DriverstatusComponent
      },
      {
        path:'updatedriver',
        component:UpdatedriverComponent
      },
      {
        path:'viewdriver',
        component:ViewdriversComponent
      }
    ]
  },
  {
    path:'agents',
    component:AgentsComponent,
    children:[
      {
        path:'',
        redirectTo:'agents',
        pathMatch:'full'
      },
      {
        path:'addagent',
        component:AddagentComponent
      },
      {
        path:'deleteagent',
        component:DeleteagentComponent
      },
      {
        path:'updateagent',
        component:UpdateagentComponent
      },
      {
        path:'viewagent',
        component:ViewagentsComponent
      }
    ]
  },
  {
    path:'bookings',
    component:BookingsComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }


import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes:Routes=[
    {path:'',redirectTo:'/login', pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'dashboard/:id',component:DashboardComponent},
{ path: '**', component: PageNotfoundComponent }

];
export const appRouting = RouterModule.forRoot(routes);
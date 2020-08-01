import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';


const routes: Routes = [{path:'',redirectTo:'/Forms',pathMatch:'full'},
{path:'Forms',component:FormsComponent},
{path:'list',component:ListComponent },
{path:'**',component:NoDataFoundComponent}];

export const routingcomponent =[FormsComponent,ListComponent,NoDataFoundComponent ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

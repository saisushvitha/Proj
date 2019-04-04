import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { SearchempComponent } from './employee/searchemp/searchemp.component';
import { AddproComponent } from './project/addpro/addpro.component';
import { SearchproComponent } from './project/searchpro/searchpro.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'employee/addemp', component: AddempComponent},
  { path: 'employee/searchemp', component: SearchempComponent},
  { path: 'project/addpro', component: AddproComponent},
  { path: 'employee/searchpro', component: SearchproComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

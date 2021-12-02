import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { BaseComponent } from "./base/base.component";

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-detail/:companyId', component: CompanyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

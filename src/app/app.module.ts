import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './Pages/index-page/index-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { RegisterListPageComponent } from './Pages/register-list-page/register-list-page.component';
import { PartnerListPageComponent } from './Pages/partner-list-page/partner-list-page.component';
import { RegisterFormComponent } from './Components/Forms/register-form/register-form.component';
import { PeopleTableComponent } from './Components/Tables/people-table/people-table.component';
import { PartnerTableComponent } from './Components/Tables/partner-table/partner-table.component';

const rutas: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'index', component: IndexPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'people', component: RegisterListPageComponent},
  {path: 'partner', component: PartnerListPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    RegisterPageComponent,
    RegisterListPageComponent,
    PartnerListPageComponent,
    RegisterFormComponent,
    PeopleTableComponent,
    PartnerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

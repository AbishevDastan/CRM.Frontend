import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReportComponent } from './components/pages/report/report.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    LoginComponent,
    ReportComponent,
    HeaderComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    NgbModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

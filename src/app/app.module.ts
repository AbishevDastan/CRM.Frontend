import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
// import { TasksComponent } from './components/pages/tasks/tasks.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReportComponent } from './components/pages/report/report.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'tasks', component: TasksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'report', component: ReportComponent }
];

const AUTHENTICATION_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthenticationInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // TasksComponent,
    LoginComponent,
    ReportComponent,
    HeaderComponent,
    RegisterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    NgbModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AUTHENTICATION_INTERCEPTOR,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    HomepageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

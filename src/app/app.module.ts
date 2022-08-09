import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RecoverpassComponent } from './pages/recoverpass/recoverpass.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { HomeComponent } from './client/home/home.component';
import { IndexComponent } from './admin/index/index.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RequestAComponent } from './client/request-a/request-a.component';
import { MisasesoriasComponent } from './client/misasesorias/misasesorias.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HorariosComponent } from './client/horarios/horarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    WelcomeComponent,
    RecoverpassComponent,
    VerificationComponent,
    HomeComponent,
    IndexComponent,
    NoimagePipe,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    ContactComponent,
    RequestAComponent,
    MisasesoriasComponent,
    HorariosComponent
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

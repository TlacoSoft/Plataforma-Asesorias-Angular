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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

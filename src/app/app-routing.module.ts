import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './guards/token.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamComponent } from './pages/team/team.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RequestAComponent } from './client/request-a/request-a.component';

const routes: Routes = [
  {
    pathMatch: "full",
    path: "",
    redirectTo: "/welcome"
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "team",
    component: TeamComponent
  }, 
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "request-a",
    component: RequestAComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './guards/token.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamComponent } from './pages/team/team.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

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
    component: ContactComponent
    path: "contact",
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

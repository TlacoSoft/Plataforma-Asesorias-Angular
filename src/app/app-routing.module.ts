import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './guards/token.guard';
import { TeamComponent } from './pages/team/team.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "welcome"
  },
  {
    path: "team",
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

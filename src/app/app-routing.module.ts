import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './guards/token.guard';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

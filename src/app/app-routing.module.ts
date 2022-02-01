import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { PersonInputComponent } from "./person-input/person-input.component";
import { PersonsComponent } from "./persons/persons.component";

const routes: Routes = [
  { path: '', component: PersonsComponent, canActivate: [AuthGuard] },
  { path: 'input', component: PersonInputComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

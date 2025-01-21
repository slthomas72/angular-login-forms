import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route for the login page
  { path: 'dashboard', component: DashboardComponent }, // Dashboard route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to the login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

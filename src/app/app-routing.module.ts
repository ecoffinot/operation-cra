import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agent/:id', component: AgentDetailsComponent },  // Route pour les détails de chaque agent
  { path: 'calendar', component: CalendarViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

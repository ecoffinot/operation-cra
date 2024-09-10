import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgentStore } from '../../store/AgentStore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  
  store = inject(AgentStore);

  constructor() {}

  ngOnInit(): void {
  }
}
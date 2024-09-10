import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from '../../model/Agent';
import { AgentStore } from '../../store/AgentStore';
import { AgentService } from '../../services/agent.service';
import { Subscription } from 'rxjs';
import { Mission } from '../../model/Mission';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
})
export class AgentDetailsComponent implements OnInit, OnDestroy {
  
  store = inject(AgentStore)
  agent!: Agent;
  mission!: Mission;

  subscriptions: Subscription[] = []
;
  constructor(
    private route: ActivatedRoute,
    private readonly agentService: AgentService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.route.params.subscribe(params => {
      const id = params['id'];
      this.agent = this.agentService.getAgentById(id);
      this.mission = this.agentService.getMissionById(this.agent?.missionId);
    }));
  }

  
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
import { EventEmitter, inject, Injectable, } from '@angular/core';
import { AgentStore } from '../store/AgentStore';
import { Agent } from '../model/Agent';
import { Mission } from '../model/Mission';
import { patchState } from '@ngrx/signals';

@Injectable({
  providedIn: 'root',
})
export class AgentService {

  store = inject(AgentStore);

  getAgents(): Agent[] {
    return this.store.agents();
  }

  getMissions(): Mission[] {
    return this.store.missions();
  }

  getAgentById(id: string): Agent {
    const agent = this.store.agents().find(agent => agent.id === id);
    if (!agent) {
        throw new Error(`Agent with ID "${id}" not found.`);
    }
    return agent;
}

  getMissionById(id: string): Mission {
    const mission =  this.store.missions().find(mission => mission.id === id);
    if(!mission){
      throw new Error(`Mission with ID "${id}" not found.`);
    }
    return mission;
  }

  extendMission(missionId: string, extensionDays: number): void {
    const mission = this.getMissionById(missionId);
    mission.end.setDate(mission.end.getDate() + extensionDays);
    this.store.updateQuery(mission.id);
    console.log(this.store.missions());
  }
}

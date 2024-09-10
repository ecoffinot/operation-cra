import { Component, inject, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';  // Interface pour configurer FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';     // Plugin de vue mensuelle
import { AgentStore } from '../../store/AgentStore';
import { AgentService } from '../../services/agent.service';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  store = inject(AgentStore);

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',  // Vue mensuelle
    events: this.store.missions()
  };

  constructor(private readonly agentService: AgentService) {}

  ngOnInit(): void {
  }

  onUpdateMission(calendar: FullCalendarComponent){
    this.agentService.extendMission("A", 365);
    let calendarApi = calendar.getApi();
    calendarApi.refetchEvents();
  }
}
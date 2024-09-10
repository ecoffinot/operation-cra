import { PartialStateUpdater, patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Agent } from '../model/Agent';
import { Mission } from '../model/Mission';

type AgentState = {
  agents: Agent[];
  missions: Mission[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: AgentState = {
  agents: [
    {
      id: '007',
      name: 'James Bond',
      missionId: 'A',
    },
    {
      id: 'OSS_117',
      name: 'Hubert Bonisseur de La Bath',
      missionId: 'B',
    },
    {
      id: 'Cain',
      name: 'Jason Bourne',
      missionId: 'C',
    },
  ],
  missions: [
    {
      id: 'A',
      title: 'Skyfall',
      start: new Date(),
      end: dateAddYears(1, new Date()),
    },
    {
      id: 'B',
      title: "Le Caire, nid d'espions",
      start: new Date(),
      end: dateAddYears(1, new Date()),
    },
    {
      id: 'A',
      title: 'La Mémoire dans la peau',
      start: new Date(),
      end: dateAddYears(1, new Date()),
    },
  ],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const AgentStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    }
  }))
);

function dateAddYears(nbrYear: number, date: Date) {
  var d = new Date(date || new Date()),
    c = d.getMonth();
  d.setFullYear(d.getFullYear() + nbrYear);
  if (d.getMonth() != c) {
    d = new Date(d.setDate(d.getDate() - 1));
  }
  return d;
}
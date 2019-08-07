import { Component, Input } from '@angular/core';

import { Agent } from './agent.model';

@Component({
  selector: 'app-agent',
  template: `
    <h3>{{agent.Name}} says:</h3>
  `
})
export class AgentComponent {
  @Input() agent: Agent;
}
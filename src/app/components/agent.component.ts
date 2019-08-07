import { Component, Input } from '@angular/core';

import { Agent } from './agent.model';

@Component({
  selector: 'app-agent',
  template: `
    <h3>{{agent.name}} says:</h3>
    <p>I, {{agent.name}}, am at your service, {{masterName}}.</p>
  `
})
export class AgentComponent {
  @Input() agent: Agent;
}
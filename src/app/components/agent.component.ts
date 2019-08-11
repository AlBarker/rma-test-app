import { Component, Input } from '@angular/core';

import { Agent } from './agent.model';

@Component({
  selector: 'app-agent',
  styleUrls: ['./agent.component.scss', '../app.component.scss'],
  templateUrl: './agent.component.html',
})

export class AgentComponent {
  @Input() agent: Agent;
  
  onButtonClick() {
    alert("You got in touch!");
  }

  formatNumber(n) {
    var ranges = [
      { divider: 1e6 , suffix: 'M' },
      { divider: 1e3 , suffix: 'k' }
    ];

    for (var i = 0; i < ranges.length; i++) {
      if (n >= ranges[i].divider) {
        return (Math.round(n / ranges[i].divider)).toString() + ranges[i].suffix;
      }
    }
    return n.toString();
  }
}


import { Component, Input } from '@angular/core';

import { Agent } from './agent.model';

@Component({
  selector: 'app-agent',
  styleUrls: ['./agent.component.scss'],
  template: `
    <div class="agent-container">
      <div class="agent-icon">
        <img src="assets/avatar.png"/>
      </div>
      <div class="agent-info">
        <p>{{agent.Name}}</p>
        <p>{{agent.Agency.Name}}</p>
      </div>
      <div class="agent-reviews">
        <img src="assets/chat.png"/>
        <p>{{agent.TotalReviews}}</p>
        <p>Reviews</p>
      </div>
      <div class="agent-sold-properties">
        <img src="assets/gavel.png"/>
        <p>{{agent.SoldProperties}}</p>
        <p>Sold properties in <b>Melbourne</b></p>
      </div>
      <div class="agent-average-sale-price">
        <img src="assets/money.png"/>
        <p>{{agent.AverageSalePrice}}</p>
        <p>Average sale price in <b>Melbourne</b></p>
      </div>
    </div>
  `
})
export class AgentComponent {
  @Input() agent: Agent;
}
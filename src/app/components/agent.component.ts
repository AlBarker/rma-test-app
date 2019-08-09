import { Component, Input } from '@angular/core';

import { Agent } from './agent.model';

@Component({
  selector: 'app-agent',
  styleUrls: ['./agent.component.scss', '../app.component.scss'],
  template: `
    <div class="agent-container col-8">
      <img class = "agent-icon col-1" src="assets/avatar.png"/>
      <div *ngIf="{{agent.IsAwardWinner}}">
        <img src="assets/awards-badge.svg"/>
      </div>
      <div class="agent-info col-3">
        <h3>{{agent.Name}}</h3>
        <p>{{agent.Agency.Name}}</p>
      </div>

      <div class="right-align col-8">
        <div class="agent-reviews agent-stat col-2">
          <div class="icon-container">
            <img src="assets/chat.png"/>
          </div>
          <h3>{{agent.TotalReviews}}</h3>
          <span>Reviews</span>
        </div>
        <div class="agent-sold-properties agent-stat col-2">
          <div class="icon-container">
            <img src="assets/gavel.png"/>
          </div>
          <h3>{{agent.SoldProperties}}</h3>
          <span>Sold properties in <b>Melbourne</b></span>
        </div>
        <div class="agent-average-sale-price agent-stat col-2">
          <div class="icon-container">
            <img src="assets/money.png"/>
          </div>
          <h3><sup>$</sup>{{formatNumber(agent.AverageSalePrice)}}</h3>
          <span>Average sale price in <b>Melbourne</b></span>
        </div>
        <button (click)="onButtonClick()" class="col-2">Get in touch</button>
      </div>
    </div>
  `
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


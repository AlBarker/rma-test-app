import { Component } from '@angular/core';
import * as dataJson from '../assets/data.json';
import { Agent } from './components/agent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rma-test-app';
  agents = dataJson.map(obj => new Agent(obj));
}

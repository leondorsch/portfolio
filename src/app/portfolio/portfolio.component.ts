import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  showPolloLoco:boolean = false;
  showJoin:boolean = false;
  showPokedex:boolean = false;
  showDaBubble:boolean = false;
}

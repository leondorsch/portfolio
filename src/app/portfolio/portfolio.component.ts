import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor() {
    AOS.init();
  }
  showPolloLoco: boolean = false;
  showJoin: boolean = false;
  showPokedex: boolean = false;
  showDaBubble: boolean = false;

}

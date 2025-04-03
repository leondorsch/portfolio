import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor() {
    AOS.init();
  }
}

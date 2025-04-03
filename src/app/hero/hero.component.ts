import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(){
    AOS.init();
  }
}

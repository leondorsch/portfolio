import { Component, Input } from '@angular/core';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import AOS from "aos";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  status:boolean;
  constructor(public navbarComponent: NavBarComponent){
    this.status = this.navbarComponent.statusDELine;
    console.log(this.status)
  }
  
  showOverlay: boolean = false;

  ngOnInit(){
    AOS.init();
  }
}

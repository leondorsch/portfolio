import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

})
export class NavBarComponent {
  statusDE: boolean = false;
  statusDELine: boolean = false
  statusENG: boolean = false;
  burgerMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  initializeLanguage() {
    let savedLanguage = localStorage.getItem("currentLanguage") || 'en';
    this.useLanguage(savedLanguage);
  }

  useLanguage(language: string) {
    localStorage.setItem("currentLanguage", language);
    this.translate.use(language);
    this.statusDE = language === 'de';
    this.statusENG = language === 'en';
    this.statusDELine = language === 'de'
  }

  toggleBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }
}


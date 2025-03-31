import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

})
export class NavBarComponent {
  statusDE: boolean = false;
  statusENG: boolean = true;
  burgerMenuOpen: boolean = false;

  constructor(private translate: TranslateService) { }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.statusDE = language === 'de';
    this.statusENG = language === 'en';
  }

  toggleBurgerMenu() {
    if (!this.burgerMenuOpen) {
      this.burgerMenuOpen = true
    } else {
      this.burgerMenuOpen = false;
    }
  }

}

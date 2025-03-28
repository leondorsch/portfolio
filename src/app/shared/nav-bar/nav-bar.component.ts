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

  constructor(private translate: TranslateService) {}

  useLanguage(language: string): void {
    this.translate.use(language);
    this.statusDE = language === 'de';
    this.statusENG = language === 'en';
  }

}

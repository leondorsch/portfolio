import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  pictureAnja: string = "assets/img/anja-img.webp"
  pictureDennis: string = "assets/img/dennis-img.webp"
  pictureDaniel: string = "assets/img/daniel-img.webp"
  nameAnja: string = "A.Gollner"
  nameDennis: string = "D.Jakobi"
  nameDaniel: string = "D.Löffler"
  anjaSelected:boolean = false;
  dennisSelected:boolean = false;
  danielSelected:boolean = true;
  back: any;

  ngOnInit(){
    AOS.init();
  }

  nextReference() {
    if(this.anjaSelected){
      this.anjaSelected = false;
      this.danielSelected = true;
    } else if(this.dennisSelected){
      this.dennisSelected = false;
      this.anjaSelected = true;
    } else if(this.danielSelected){
      this.danielSelected = false;
      this.dennisSelected = true;
    }
  }

  previousReference(){
    if(this.danielSelected){
      this.danielSelected = false;
      this.anjaSelected = true;
    } else if(this.dennisSelected){
      this.dennisSelected = false;
      this.danielSelected = true;
    } else if(this.anjaSelected){
      this.anjaSelected = false;
      this.dennisSelected = true;
    }
  }
}

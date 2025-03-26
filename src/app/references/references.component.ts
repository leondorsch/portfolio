import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  pictureAnja: string = "assets/img/anja-img.jpeg"
  pictureDennis: string = "assets/img/dennis-img.png"
  pictureDaniel: string = "assets/img/daniel-img.jpeg"
  nameAnja: string = "A.Gollner"
  nameDennis: string = "D.Jakobi"
  nameDaniel: string = "D.Löffler"
  anjaSelected:boolean = true;
  dennisSelected:boolean = false;
  danielSelected:boolean = false;
  back: any;

  nextReference() {
    if(this.anjaSelected){
      this.anjaSelected = false;
      this.dennisSelected = true;
    } else if(this.dennisSelected){
      this.dennisSelected = false;
      this.danielSelected = true;
    } else if(this.danielSelected){
      this.danielSelected = false;
      this.anjaSelected = true;
    }
  }

  previousReference(){
    if(this.danielSelected){
      this.danielSelected = false;
      this.dennisSelected = true;
    } else if(this.dennisSelected){
      this.dennisSelected = false;
      this.anjaSelected = true;
    } else if(this.anjaSelected){
      this.anjaSelected = false;
      this.danielSelected = true;
    }
  }
}

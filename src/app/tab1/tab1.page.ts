import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  adsIndex: number;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  ads = [
    { "img": "assets/advertises/Advertise1.png" },
    { "img": "assets/advertises/Advertise2.png" },
    { "img": "assets/advertises/Advertise3.png" },

  ]
  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
        console.log(index);
        this.adsIndex=index
    });
}
  constructor() { }

}

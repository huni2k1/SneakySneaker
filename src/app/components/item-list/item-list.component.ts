import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getDatabase,onValue,set,ref, Database } from "firebase/database";

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() listLabel: string
  products = [
  ];
  itemSlideOpts = {
    freeMode: true,
    slidesPerView: 2.5,
    speed: 200,
    spaceBetween: 5,
    slidesOffsetBefore: 10
  }
  constructor(firebase: FirebaseService) {
    const db = getDatabase();
    this.products=[]
    onValue(ref(db,'products'), (snapshot)=>{
     const data=snapshot.val();
     let pt=1;
     while(data[pt]){
       pt++;
     }
})
}

  ngOnInit() {
    console.log(this.listLabel)
  }
}

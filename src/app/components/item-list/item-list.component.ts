import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getDatabase,onValue,set,ref, Database } from "firebase/database";
import { setRootAriaHidden } from '@ionic/core/dist/types/utils/overlays';

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

}
compare( a, b ) {
  if(a.Sold<b.Sold){
    return 1;
  }
  else{
    return -1;
  }
}

  ngOnInit() {
    console.log("Getting top popular product...")
    const db = getDatabase();
    this.products=[]
    onValue(ref(db,'products'), (snapshot)=>{
     const data=snapshot.val();
     let pt=1;
     this.products=[];
     while(data[pt]){
       this.products.push(data[pt])
       pt++;
     }
     if(this.listLabel=='Popular'){
     this.products.sort(this.compare)
     this.products=this.products.slice(0,7)
     }
     else if(this.listLabel=='New Arrive'){
      this.products=this.products.slice(-7)
      this.products=this.products.reverse()
     }
    })
}
}

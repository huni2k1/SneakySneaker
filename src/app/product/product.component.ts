import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { getDatabase,onValue,set,ref, Database } from "firebase/database";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number
  product:[]
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id')
      })
      const db = getDatabase()
      onValue(ref(db, 'products/'+this.id), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        this.product=data
      })
    }
}

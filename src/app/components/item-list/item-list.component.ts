import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input()listLabel:string
  products = [
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},   { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},   { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},   { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},   { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
    { "id": 1, "name": " Nike Air Force One Low Bredtoe", "sold": 456, "price": "170.00" , "img":"assets/sneakers/Jordan1LowShatterbackboard.jpg"},
  ];
  itemSlideOpts={
    freeMode: true,
    slidesPerView: 2.5,
    speed:200,
    spaceBetween:5,
    slidesOffsetBefore:10
  }
  constructor() { }

  ngOnInit() {
    this.listLabel="List Label"
   }

}

import { Component } from '@angular/core';
import { ActionSheetController,AlertController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Storage } from '@capacitor/storage';
import { getDatabase, onValue, ref, set } from 'firebase/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name:string;
  price:number;
  nextID:number=1;
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController,public alertController: AlertController) {
    const db = getDatabase();
    onValue(ref(db,'products'), (snapshot)=>{
      const data=snapshot.val();
      for(var key in data)
          this.nextID++;
      console.log(this.nextID);
    })
  }
  
   itemSlideOpts={
    freeMode: true,
    slidesPerView: 1,
    speed:200,
    spaceBetween:5,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  }
  handleSubmit(){
    console.log(this.photoService.photos[0].webviewPath)
    const db = getDatabase();
    set(ref(db, 'products/'+this.nextID), {
       Id:this.nextID,
       User:"admin",
       Sold:0,
       Price:this.price,
       Name:this.name,
       ImageUrl:this.photoService.photos[0].webviewPath
    });
    this.nextID++;
    this.name=""
    this.price=0
    this.photoService.photos[0].webviewPath=""
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Stubbed out',
      subHeader: '',
      message: 'Feature require database(Implementing).',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

}

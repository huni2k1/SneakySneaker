import { Component } from '@angular/core';
import { ActionSheetController,AlertController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController,public alertController: AlertController) {}
  
  itemSlideOpts={
    freeMode: true,
    slidesPerView: 2.5,
    speed:200,
    spaceBetween:5,
    slidesOffsetBefore:10
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

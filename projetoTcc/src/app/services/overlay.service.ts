import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AlertOptions, LoadingOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  async alert(options?: AlertOptions): Promise <HTMLIonAlertElement>{
      const alert = await this.alertCtrl.create(options);
      await alert.present();
      return alert;
  }

  async loading(options?: LoadingOptions): Promise <HTMLIonLoadingElement>{
    const loading = await this.loadingCtrl.create ({
      message: 'Autenticando...',
      spinner: "bubbles",
      duration: 3000,
    });
    await loading.present();
    return loading;
  }

  async toast(options?: ToastController): Promise <HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'middle',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    })
    await toast.present();
    return toast;
  }
}

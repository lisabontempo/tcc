import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pessoa } from '../model/pessoa';
import { LoadingOptions } from '@ionic/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private loadingCtrl: LoadingController) {
   setTimeout(() => {
    this.show = false;
   },3000);
  }

  async loading(options?: LoadingOptions): Promise <HTMLIonLoadingElement>{
    const loading = await this.loadingCtrl.create ({
      message: 'Carregando...',
      spinner: "bubbles",
      duration: 2000,
    });
    await loading.present();
    return loading;
  }


  slides = [
    {
      img: 'https://infraestrutura.unipam.edu.br/images/fachada.jpg',
     // titulo: 'meu slide 1'
    },
    {
      img: 'https://infraestrutura.unipam.edu.br/images/fachada.jpg',
      //titulo: 'meu slide 2'
    },
    {
      img: 'https://infraestrutura.unipam.edu.br/images/fachada.jpg',
      //titulo: 'meu slide 3'
    }
  ]
  show = true;

  pessoa: pessoa;

  nps() {
    this.router.navigate(['nps']);
    const loading = this.loading()

  }

}

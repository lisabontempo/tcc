import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pessoa } from '../model/pessoa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      img: 'https://infraestrutura.unipam.edu.br/images/fachada.jpg',
     // titulo: 'meu slide 1'
    },
    {
      img: 'https://cdn160.picsart.com/upscale-276656061008211.png?r1024x1024',
      //titulo: 'meu slide 2'
    },
    {
      img: 'https://66.media.tumblr.com/b2b9ce02b09b7d132556ca00e6b882f3/tumblr_od05ox3dPI1vx777ao1_400.gif',
      //titulo: 'meu slide 3'
    }
  ]
  show = true;

  pessoa: pessoa;

  constructor(private router: Router) {
   setTimeout(() => {
    this.show = false;
   },3000);
  }

  nps() {
    this.router.navigate(['nps']);
  }

}

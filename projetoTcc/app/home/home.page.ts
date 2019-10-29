import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pessoa } from '../model/pessoa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

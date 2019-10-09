import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pessoa } from '../model/pessoa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  pessoa: pessoa;

  constructor(private router: Router) {
   
  }

  nps() {
    this.router.navigate(['nps']);
  }

}

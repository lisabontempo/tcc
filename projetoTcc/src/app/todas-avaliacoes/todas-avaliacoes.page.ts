import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';

@Component({
  selector: 'app-todas-avaliacoes',
  templateUrl: './todas-avaliacoes.page.html',
  styleUrls: ['./todas-avaliacoes.page.scss'],
})
export class TodasAvaliacoesPage implements OnInit {

  usuarioDto : usuario;

  constructor() {
    this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));
   }

  ngOnInit() {
  }

}

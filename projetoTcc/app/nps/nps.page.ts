import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ServicoRestService } from '../servico/servico-rest.service'
import { avaliacao } from '../model/avaliacoes';
import { retornoAvaliacoes } from '../model/retornoAvaliacoes';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.page.html',
  styleUrls: ['./nps.page.scss'],
})
export class NpsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

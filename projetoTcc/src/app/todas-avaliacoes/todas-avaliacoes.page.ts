import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import {todasAvaliacoes} from '../model/todasAvaliacoes';
import { ServicoRestService } from '../servico/servico-rest.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todas-avaliacoes',
  templateUrl: './todas-avaliacoes.page.html',
  styleUrls: ['./todas-avaliacoes.page.scss'],
})
export class TodasAvaliacoesPage implements OnInit {

  listaTodasAvaliacoes : Array<todasAvaliacoes>
  usuarioDto : usuario;
  IdAvaliacao : any;
  IdTipoAvaliacao: any ; 

  constructor(private servicoRest : ServicoRestService,
    private navCtrl : NavController,
    private alertCtrl : AlertController,private router: Router,private acrouter: ActivatedRoute) {

    this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));

    this.acrouter.params.subscribe(params => {

         this.IdAvaliacao = params['IdAvaliacao'];  
         this.IdTipoAvaliacao =  params['IdTipoAvaliacao'];  
       
     });

     this.listaTodasAvaliacoes = new Array<todasAvaliacoes>();

     this.recuperarAvaliacoes();

   }

   async recuperarAvaliacoes() {

    await this.servicoRest.listarAvaliacao(this.usuarioDto.usuario, this.usuarioDto.senha)
      .then((data) => {
         let retorno = Object.assign(data)
           this.listaTodasAvaliacoes = retorno.Atividades;
      
      })
      .catch((erro) => {
          console.log(erro.error.error_description);        
      });
  }

  ngOnInit() {
  }

}

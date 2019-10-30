import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ServicoRestService } from '../servico/servico-rest.service'
import { avaliacao } from '../model/avaliacoes';
import { retornoAvaliacoes } from '../model/retornoAvaliacoes';
import { usuario } from '../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.page.html',
  styleUrls: ['./nps.page.scss'],
})
export class NpsPage implements OnInit {

  listaAvaliacoes : Array<avaliacao>
  usuarioDto : usuario;
  idAvaliacao = Number ;
  idTipoAvaliacao = Number;

  constructor(private servicoRest : ServicoRestService,
    private navCtrl : NavController,
    private alertCtrl : AlertController,private router: Router) { 

      this.listaAvaliacoes = new Array<avaliacao>();
    this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));
    this.recuperarAvaliacoes();

    }

    async recuperarAvaliacoes() {

      await this.servicoRest.listarAvaliacao(this.usuarioDto.usuario, this.usuarioDto.senha)
        .then((data) => {
          let retorno = Object.assign(new retornoAvaliacoes(), data)
          if (retorno.Autenticado !== "N") {
             this.listaAvaliacoes = retorno.Avaliacoes;
          }
        })
        .catch((erro) => {
            console.log(erro.error.error_description);        
        });
    }

    atividade(IdAvaliacao, IdTipoAvaliacao){

     // this.router.navigate(['todasAvaliacao', {IdAvaliacao, IdTipoAvaliacao}]);
     this.navCtrl.navigateRoot(['todas-avaliacoes' , {IdAvaliacao, IdTipoAvaliacao}]);
    }


  ngOnInit() {
  }

}

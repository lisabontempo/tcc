import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServicoRestService } from '../servico/servico-rest.service'
import { avaliacao } from '../model/avaliacoes';
import { retornoAvaliacoes } from '../model/retornoAvaliacoes';
import { usuario } from '../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingOptions } from '@ionic/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-nps',
  templateUrl: './nps.page.html',
  styleUrls: ['./nps.page.scss'],
})
export class NpsPage implements OnInit {

  listaAvaliacoes : Array<avaliacao>
  usuarioDto : usuario;

  
  constructor(private servicoRest : ServicoRestService,
    private router: Router,
    private loadingCtrl: LoadingController) { 

      this.listaAvaliacoes = new Array<avaliacao>();
    this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));
    this.recuperarAvaliacoes();

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
 

    async recuperarAvaliacoes() {

      await this.servicoRest.listarAvaliacao(this.usuarioDto.usuario, this.usuarioDto.senha)
        .then((data) => {
          let retorno = Object.assign(new retornoAvaliacoes(), data)
          if (retorno.Autenticado !== "N") {
            let retornoFiltrado = _.filter(retorno.Avaliacoes, (atividade) => { return atividade.IdTipoAvaliacao == 17 })
             this.listaAvaliacoes = retornoFiltrado;
          }
        })
        .catch((erro) => {
            console.log(erro.error.error_description);        
        });
    }

    atividade(IdAvaliacao, IdTipoAvaliacao){

      this.router.navigate(['todas-avaliacoes' , {IdAvaliacao, IdTipoAvaliacao}]);
      const loading = this.loading()
    }


  ngOnInit() {
  }

}

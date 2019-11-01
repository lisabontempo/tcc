import { Component, OnInit } from '@angular/core';
import { ServicoRestService } from '../servico/servico-rest.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../model/usuario';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.page.html',
  styleUrls: ['./avaliar.page.scss'],
})
export class AvaliarPage implements OnInit {

  IdAplicacaoAvaliacaoEstrutura: any;
  IdAcesso: any;
  IdAplicacaoAvaliacao: any;
  IdTipoAvaliacao: any;
  usuarioDto : usuario;
  avaliar : any = []; 

  constructor(private servicoRest : ServicoRestService,
    private navCtrl : NavController,
    private alertCtrl : AlertController,private router: Router,private acrouter: ActivatedRoute) {

      this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));

    this.acrouter.params.subscribe(params => {

         this.IdAcesso = params['IdAcesso'];  
         this.IdTipoAvaliacao =  params['IdTipoAvaliacao'];  
         this.IdAplicacaoAvaliacao =  params['IdAplicacaoAvaliacao'];  
         this.IdAplicacaoAvaliacaoEstrutura =  params['IdAplicacaoAvaliacaoEstrutura'];  
       
     });

     this.recuperarAvaliacao();

     }


     async recuperarAvaliacao() {

      await this.servicoRest.listarProfessores(this.IdAcesso, this.usuarioDto.IdUsuario, this.IdAplicacaoAvaliacao, this.IdTipoAvaliacao)
        .then((data) => {
             let retorno = Object.assign(data)
             this.avaliar = retorno.ItensAtividade;
        
        })
        .catch((erro) => {
            console.log(erro.error.error_description);        
        });
    }

  ngOnInit() {
  }

}

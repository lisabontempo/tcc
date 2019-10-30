import { Component, OnInit } from '@angular/core';
import { ServicoRestService } from '../servico/servico-rest.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { usuario } from '../model/usuario';
import { professor } from '../model/professor';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  listaprofessores : Array<professor>
  usuarioDto : usuario;
  IdAcesso : any;
  IdAplicacaoAvaliacao: any;
  IdTipoAvaliacao: any;

  constructor(private servicoRest : ServicoRestService,
    private navCtrl : NavController,
    private alertCtrl : AlertController,private router: Router,private acrouter: ActivatedRoute) { 

    this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));

    this.acrouter.params.subscribe(params => {

         this.IdAcesso = params['IdAcesso'];  
         this.IdTipoAvaliacao =  params['IdTipoAvaliacao'];  
         this.IdAplicacaoAvaliacao =  params['IdAplicacaoAvaliacao'];  
       
     });

     this.listaprofessores = new Array<professor>();

     this.recuperarProfessores();


  }

  async recuperarProfessores() {

    await this.servicoRest.listarProfessores(this.IdAcesso, this.usuarioDto.IdUsuario, this.IdAplicacaoAvaliacao, this.IdTipoAvaliacao)
      .then((data) => {
         let retorno = Object.assign(data)
           this.listaprofessores = retorno.AplicacoesAvaliacoes;
      
      })
      .catch((erro) => {
          console.log(erro.error.error_description);        
      });
  }

  ngOnInit() {
  }

}

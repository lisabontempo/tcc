import { Component, OnInit } from '@angular/core';
import { ServicoRestService } from '../servico/servico-rest.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
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
  nota = 0
  resposta: ''
  IdAvaliacao : any
  Professor : any

  constructor(private servicoRest : ServicoRestService,
    private navCtrl : NavController,
    private alertCtrl : AlertController,private router: Router,private acrouter: ActivatedRoute,
    private loadingCtrl : LoadingController ) {

      this.usuarioDto = JSON.parse(window.sessionStorage.getItem("Usuario"));

    this.acrouter.params.subscribe(params => {

         this.IdAcesso = params['IdAcesso'];  
         this.IdTipoAvaliacao =  params['IdTipoAvaliacao'];  
         this.IdAplicacaoAvaliacao =  params['IdAplicacaoAvaliacao'];  
         this.IdAplicacaoAvaliacaoEstrutura =  params['IdAplicacaoAvaliacaoEstrutura'];  
         this.IdAvaliacao = params['IdAvaliacao'];
         this.Professor = params['Professor'];
       
     });

     this.recuperarAvaliacao();

     }


     async recuperarAvaliacao() {

      await this.servicoRest.listarProfessores(this.IdAcesso, this.usuarioDto.IdUsuario, this.IdAplicacaoAvaliacao, this.IdTipoAvaliacao)
        .then((data) => {
             let retorno = Object.assign(data)
           
             this.avaliar = retorno.ItensAtividade;

             console.log(this.avaliar)
        
        })
        .catch((erro) => {
            console.log(erro.error.error_description);        
        });
    }

  ngOnInit() {
  }

  async submit () {
    const data = {
      Id_Usuario: this.usuarioDto.IdUsuario,
      Professor : this.Professor,
      Nota: this.nota,
      Descricao: this.resposta,
      IdAvaliacao: this.IdAvaliacao
    }

    const loading = await this.loadingCtrl.create({
      message: 'Estamos enviando sua solicitação de salvar atividade',
      duration: 2000
    });
    await loading.present();

    await this.servicoRest.salvarAvaliacao(data)
      .then((result) => {
        loading.onDidDismiss();
        this.router.navigate(['avaliacao']);
        console.log(result)
      }).catch((err) => {
        loading.onDidDismiss();
        console.log(err)
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { retornoAutenticacao } from '../model/retornoAutenticacao';
import { AlertController, NavController } from '@ionic/angular';
import { ServicoRestService } from '../servico/servico-rest.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioDto : usuario;
  mensagem : String;

  constructor(private alertCtrl : AlertController,
    private navCtrl : NavController, 
    private servicoRest : ServicoRestService) { 

      this.usuarioDto = new usuario();

    }

  ngOnInit() {
  }

  async mostrarMensagem(textoMensagem : string) {
    const alert = await this.alertCtrl.create({
      header: 'Atenção', 
      message: textoMensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async autenticarUsuario()
  {
     if (this.usuarioDto.usuario.trim() == "")
     {
       this.mensagem = "Favor informar o usuário";
       this.mostrarMensagem(this.mensagem.toString());
       return;
     }

     if (this.usuarioDto.senha.trim() == "")
     {
       this.mensagem = "Favor informar a senha";
       this.mostrarMensagem(this.mensagem.toString());
       return;
     }
     this.mensagem = "";

     await this.servicoRest.autenticarUsuario(
       this.usuarioDto.usuario.trim(),
       this.usuarioDto.senha.trim())
          .then((data)=> {                
              let retorno = Object.assign(new retornoAutenticacao(), data) 
             
              if (retorno.Autenticado === "N")
              {
               
                  this.mensagem = retorno.Mensagem
              }
              else
              {
                this.usuarioDto.nomeUsuario = retorno.NomeUsuario;
                
              }
          })
         .catch((erro)=> {
          console.log("entrou catch");
              console.log(erro.error.error_description);
              //this.mensagem= erro.error.error_description;   
              return;            
        });

     if (this.mensagem.trim() != "")
        {
           this.mostrarMensagem(this.mensagem.toString());
           return;
        }

    
     window.sessionStorage.setItem("Usuario", JSON.stringify(this.usuarioDto));
     this.navCtrl.navigateRoot('home');
     
  }

}

import { OverlayService } from './../services/overlay.service';
import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { retornoAutenticacao } from '../model/retornoAutenticacao';
import { AlertController, NavController } from '@ionic/angular';
import { ServicoRestService } from '../servico/servico-rest.service'
import { pessoa } from '../model/pessoa';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;

  usuarioDto : usuario;
  mensagem : String;
  pessoa: pessoa;

  constructor(private alertCtrl : AlertController,
    private navCtrl : NavController, 
    private servicoRest : ServicoRestService,
    private fb: FormBuilder,
    private overlayService: OverlayService) { 

      this.usuarioDto = new usuario();

    }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha:   ['', [Validators.required]]

    })
  }

  get usuario(): FormControl {
    return <FormControl>this.authForm.get('usuario');
  }

  get senha(): FormControl {
    return <FormControl>this.authForm.get('senha');
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
        const loading = await this.overlayService.loading()
    
     window.sessionStorage.setItem("Usuario", JSON.stringify(this.usuarioDto));
     this.navCtrl.navigateRoot('home');
     loading.dismiss();
     
  }

}

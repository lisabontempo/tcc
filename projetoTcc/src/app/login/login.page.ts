import { OverlayService } from './../services/overlay.service';
import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { retornoAutenticacao } from '../model/retornoAutenticacao';
import { AlertController, NavController, ToastController } from '@ionic/angular';
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
    private overlayService: OverlayService,
    private toastCtrl: ToastController) { 

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

  async toast(options?: ToastController): Promise <HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message: 'Usuário inválido! Procure a secretaria acadêmica.',
      position: 'middle',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    })
    await toast.present();
    return toast;
  }

  async autenticarUsuario()
  {
     if (this.usuarioDto.usuario.trim() == "")
     {
       this.mensagem = "Favor informar o usuário";
       this.toast();
       return;
     }

     if (this.usuarioDto.senha.trim() == "")
     {
       this.mensagem = "Favor informar a senha";
       this.toast();
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
                this.usuarioDto.IdUsuario = retorno.IdUsuario;
                
                
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
           this.toast();
           return;
        }
        const loading = await this.overlayService.loading()
    
     window.sessionStorage.setItem("Usuario", JSON.stringify(this.usuarioDto));
     this.navCtrl.navigateRoot('home');
     loading.dismiss();
     
  }

}

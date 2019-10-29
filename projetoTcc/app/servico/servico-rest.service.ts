import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoRestService {

  constructor(private http: HttpClient) {

  }


  async autenticarUsuario(usuario: String, senha: String) {
    var dados = {

    IdeUsuario : usuario,
      SenhaUsuario : senha,
      IdSistema : 9909
     
    }
    var url = "http://ws.unipam.edu.br/ServicoSegurancaMobile/Autenticar/AutenticarGeral";

    return await this.http.post(url, dados, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).toPromise();

  }

  async listarAvaliacao(usuario: String, senha: String) {
    var dados = {

      IdeUsuario : usuario,
      SenhaUsuario : senha,
      IdSistema : 9909
     
    }
    var url = "https://ws.unipam.edu.br/ServicoSegurancaMobile/Atividade/ListarAtividades";

    return await this.http.post(url, dados, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).toPromise();

  }



}

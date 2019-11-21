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

  async listarProfessores(idAcesso: String, idUsuario: String, idAplicacao: String, idTipoAvaliacao: String) {
    var dados = {

      "IdAcesso": "711547",
      "IdUsuario": 50947,
      "IdAplicacaoAvaliacao": "3438" ,
      "IdTipoAvaliacao":17
      
     // "IdAcesso": idAcesso,
      //"IdUsuario": idUsuario,
      //"IdAplicacaoAvaliacao": idAplicacao,
      // "IdTipoAvaliacao": idTipoAvaliacao

    }
    var url = "https://ws.unipam.edu.br/ServicoSegurancaMobile/Atividade/ListarItensAtividade";

    return await this.http.post(url, dados, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).toPromise();

  }

  async salvarAvaliacao(data) {
    var url = "https://tcc-backend-unipam.herokuapp.com/salvarAtividades";

    return await this.http.post(url, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).toPromise();
  }


}

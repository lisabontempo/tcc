import {avaliacao} from './avaliacoes'

export class retornoAvaliacoes {

    public Avaliacoes: Array<avaliacao>;
    public MensagemDeErro: String; 
    public Autenticado : String;  
    
    constructor() {  

         this.Avaliacoes = new Array<avaliacao>();
         this.MensagemDeErro = "";
         this.Autenticado = "";
    }    
  }
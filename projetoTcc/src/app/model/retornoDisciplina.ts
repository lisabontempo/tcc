import {disciplina} from './disciplina'
export class retornoDisciplina {

    public DisciplinasAluno: Array<disciplina>;
    public MensagemDeErro: String; 
    public Autenticado : String;  
    
    constructor() {  

         this.DisciplinasAluno = new Array<disciplina>();
         this.MensagemDeErro = "";
         this.Autenticado = "";
    }    
  }
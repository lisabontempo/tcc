import {aula} from './aula'
import { retornoAutenticacao } from './retornoAutenticacao';
export class retornoAula {

    public Aulas: Array<aula>;
    public Retorno: retornoAutenticacao;  
    
    constructor() {  

         this.Aulas = new Array<aula>();
         this.Retorno = new retornoAutenticacao(); 
    }    
  }
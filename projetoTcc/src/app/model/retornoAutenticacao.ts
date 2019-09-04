export class retornoAutenticacao {

    public IdeUsuario: String;
    public Senha: String; 
    public NomeUsuario : String; 
    public Mensagem : String;
    public Autenticado : String;
    
    constructor() {  
         this.IdeUsuario = "";
         this.Senha = ""; 
         this.NomeUsuario = ""; 
         this.Mensagem = "";
         this.Autenticado = "";
    }    
  }
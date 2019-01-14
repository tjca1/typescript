  let msg_:string = "MENSAGEM SIMPLES  - tjca1@hotmail.com";

  //alert(msg_);
  let fGenerica:(nome:String) => String;
  fGenerica = nome => 'nome:'+nome;

  function fGenericaParam(nome_:string, idade_:number, peso_:number, obs?:string):string{
    
      let return_  = 'nome:'+nome_ + '  / Idade:'+idade_ + '/ Peso:'+peso_;
      if(typeof(obs) != 'undefined'){ 
          return_ += ' / Observação:'+obs;
      }
      return return_;

  }
  //////soma array de numeros TRADICIONAL////////
  function somaArrayNumeros(vetor:number[]):number{
    return vetor.reduce((a,b)=>a + b,0);
  }

   //////soma array de numeros TRADICIONAL////////
   function somaArrayNumerosRest(...vetor:number[]):number{
    return vetor.reduce((a,b) => a + b,0);
  }

  let isGordo = function (peso:number) : boolean{ 
    return peso > 100;
  }

  let isGordoTemplateString  = (peso:number) : boolean =>{ 
    return peso > 100;
  }

  console.log(msg_);
  console.log(fGenerica('THIAGO JOSE CORREIA DE ARAUJO'));
  console.log(fGenericaParam('Thiago', 30, 85));
  console.log(fGenericaParam('Thiago Araujo ', 30, 85, 'CAMPO RELATIVO'));
  console.log('SOMA ARRAY:'+somaArrayNumeros([55,80,50]));
  console.log('SOMA ARRAY REST:'+somaArrayNumerosRest(1000,1000,2000)); // PARAM PASSADOS SO POR VIRGULA, NÃO É NECESSARIO COLOCAR EM ESTRUTURA ARRAY[]
  let pesoIsGorso = 200;
  console.log(` O Peso é : ${pesoIsGorso} 
  O rapaz é gordo???? : Resposta -  ${isGordo(pesoIsGorso) ? 'SIM' : 'NÃO'}`);
  ////////////////////////////////////////////////////////////////////////////
  console.log(`C/ Templete  O Peso é : ${pesoIsGorso} 
  O rapaz é gordo???? : Resposta -  ${isGordoTemplateString(pesoIsGorso) ? 'SIM' : 'NÃO'}`);



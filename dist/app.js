var msg_ = "MENSAGEM SIMPLES  - tjca1@hotmail.com";
//alert(msg_);
var fGenerica;
fGenerica = function (nome) { return 'nome:' + nome; };
function fGenericaParam(nome_, idade_, peso_, obs) {
    var return_ = 'nome:' + nome_ + '  / Idade:' + idade_ + '/ Peso:' + peso_;
    if (typeof (obs) != 'undefined') {
        return_ += ' / Observação:' + obs;
    }
    return return_;
}
//////soma array de numeros TRADICIONAL////////
function somaArrayNumeros(vetor) {
    return vetor.reduce(function (a, b) { return a + b; }, 0);
}
//////soma array de numeros TRADICIONAL////////
function somaArrayNumerosRest() {
    var vetor = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vetor[_i] = arguments[_i];
    }
    return vetor.reduce(function (a, b) { return a + b; }, 0);
}
var isGordo = function (peso) {
    return peso > 100;
};
var isGordoTemplateString = function (peso) {
    return peso > 100;
};
console.log(msg_);
console.log(fGenerica('THIAGO JOSE CORREIA DE ARAUJO'));
console.log(fGenericaParam('Thiago', 30, 85));
console.log(fGenericaParam('Thiago Araujo ', 30, 85, 'CAMPO RELATIVO'));
console.log('SOMA ARRAY:' + somaArrayNumeros([55, 80, 50]));
console.log('SOMA ARRAY REST:' + somaArrayNumerosRest(1000, 1000, 2000)); // PARAM PASSADOS SO POR VIRGULA, NÃO É NECESSARIO COLOCAR EM ESTRUTURA ARRAY[]
var pesoIsGorso = 200;
console.log(" O Peso \u00E9 : " + pesoIsGorso + " \n  O rapaz \u00E9 gordo???? : Resposta -  " + (isGordo(pesoIsGorso) ? 'SIM' : 'NÃO'));
////////////////////////////////////////////////////////////////////////////
console.log("C/ Templete  O Peso \u00E9 : " + pesoIsGorso + " \n  O rapaz \u00E9 gordo???? : Resposta -  " + (isGordoTemplateString(pesoIsGorso) ? 'SIM' : 'NÃO'));

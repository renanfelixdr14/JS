var bntBotao = document.querySelector('#botao');
var divResultado = document.getElementById('resultado');
var inputNome = document.getElementById('numero');
//var graus
var bntBotaoG = document.querySelector('#botaoG');
var divResultadoG = document.querySelector('.resultadoG');
var inputGraus = document.getElementById('numeroG');

function MudarCparaF(g) {
    return (g * 1.8 + 32);
}

bntBotaoG.addEventListener('click', function(){
    var numeroG = parseFloat(inputGraus.value);
    divResultadoG.innerHTML = MudarCparaF(numeroG);
})


function verificaParOuImpar(n) {
    if (n % 2 == 0){
        return ('par');
    } else {
        return ('impar');
    }
}

bntBotao.addEventListener('click', function(){
    var numero = parseInt(inputNome.value);
    divResultado.innerHTML = verificaParOuImpar(numero);
})

 


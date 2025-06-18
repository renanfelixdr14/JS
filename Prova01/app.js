var botaoAbrir = document.getElementById('botaoA');
var botaoValidar1 = document.getElementById('botaoValidar1');
var botaoValidar2 = document.getElementById('botaoValidar2');
var inputSelect = document.getElementById('select');
var produtoD = document.getElementsByClassName('produtoD')[0];
var servicoD = document.getElementsByClassName('servicoD')[0];
var inputdsP = document.getElementById('dsP');
var inputcategoria = document.getElementById('categoria');
var inputValorV = document.getElementById('ValorV');
var inputValorP = document.getElementById('ValorP');
var inputdsS = document.getElementById('dsS');
var inputValorPC = document.getElementById('ValorPC');
var inputValorMO = document.getElementById('ValorMO');
var mensagem = document.getElementsByClassName('mensagem')[0]
var mensagem2 = document.getElementsByClassName('mensagem')[1]
var mensagem3 = document.getElementsByClassName('mensagem')[2]
var mensagem4 = document.getElementsByClassName('mensagem')[3]
var mensagem5 = document.getElementsByClassName('mensagem')[4]
var mensagem6 = document.getElementsByClassName('mensagem')[5]
var mensagem7 = document.getElementsByClassName('mensagem')[6]


botaoAbrir.addEventListener('click', function(){
    
    if(inputSelect.value == 'produto'){
        produtoD.classList.remove('esconder')
        produtoD.classList.add('exibir')
        servicoD.classList.add('esconder')
        servicoD.classList.remove('exibir')
        mensagem5.classList.remove('exibir')
        mensagem6.classList.remove('exibir')
        mensagem7.classList.remove('exibir')
        mensagem5.classList.add('esconder')
        mensagem6.classList.add('esconder')
        mensagem7.classList.add('esconder')
    }else if(inputSelect.value == 'servico'){
        servicoD.classList.add('exibir')
        servicoD.classList.remove('esconder')
        produtoD.classList.remove('exibir')
        produtoD.classList.add('esconder')
        mensagem.classList.add('esconder')
        mensagem2.classList.add('esconder')
        mensagem3.classList.add('esconder')
        mensagem4.classList.add('esconder')
        mensagem.classList.remove('exibir')
        mensagem2.classList.remove('exibir')
        mensagem3.classList.remove('exibir')
        mensagem4.classList.remove('exibir')
    }else{
        produtoD.classList.remove('exibir')
        servicoD.classList.remove('exibir')
        produtoD.classList.add('esconder')
        servicoD.classList.add('esconder')
        mensagem.classList.add('esconder')
        mensagem2.classList.add('esconder')
        mensagem3.classList.add('esconder')
        mensagem4.classList.add('esconder')
        mensagem.classList.remove('exibir')
        mensagem2.classList.remove('exibir')
        mensagem3.classList.remove('exibir')
        mensagem4.classList.remove('exibir')
        mensagem5.classList.remove('exibir')
        mensagem6.classList.remove('exibir')
        mensagem7.classList.remove('exibir')
        mensagem5.classList.add('esconder')
        mensagem6.classList.add('esconder')
        mensagem7.classList.add('esconder')
    }
    
    
})
botaoValidar1.addEventListener('click', function(){
    
    if(inputdsP.value == ''){
        inputdsP.style.backgroundColor = 'red';
        inputdsP.style.borderColor = 'black';
        mensagem.innerHTML = "Descrição do Produto não informada<br>";
        mensagem.classList.add('exibir');
        mensagem.classList.remove('esconder')
    }else{
        inputdsP.style.backgroundColor = 'green';
        inputdsP.style.color = 'white'; 
        mensagem.textContent = '';
        mensagem.classList.add('esconder');
        mensagem.classList.remove('exibir');
    }

    if(inputcategoria.value == ''){
        inputcategoria.style.backgroundColor = 'red';
        inputcategoria.style.borderColor = 'black';
        mensagem2.innerHTML = "categoria não informada<br>";
        mensagem2.classList.add('exibir');
        mensagem2.classList.remove('esconder')
    }else{
        inputcategoria.style.backgroundColor = 'green';
        inputcategoria.style.color = 'white'; 
        mensagem2.textContent = '';
        mensagem2.classList.add('esconder');
        mensagem2.classList.remove('exibir');
    }

    if(inputValorV.value == ''){
        inputValorV.style.backgroundColor = 'red';
        inputValorV.style.borderColor = 'black';
        mensagem3.innerHTML = "Valor à Vista não informado<br>";
        mensagem3.classList.add('exibir');
        mensagem3.classList.remove('esconder')
    }else{
        inputValorV.style.backgroundColor = 'green';
        inputValorV.style.color = 'white'; 
        mensagem3.textContent = '';
        mensagem3.classList.add('esconder');
        mensagem3.classList.remove('exibir');
    }

    function Adicionar5(p){
        return(p * 5 / 100)
    }

    var numeroP = parseInt(inputValorV)
    divResultadoP = Adicionar5(numeroP);

    if(inputValorP.value == '' ||inputValorP.value <= 1000 || inputValorP.value < divResultadoP ){
        inputValorP.style.backgroundColor = 'red';
        inputValorP.style.borderColor = 'black';
        mensagem4.innerHTML = "Valor à Prazo não é acima dos 5% do avista ou acima de 1000 ou não foi informado<br>";
        mensagem4.classList.add('exibir');
        mensagem4.classList.remove('esconder')
    }else{
        inputValorP.style.backgroundColor = 'green';
        inputValorP.style.color = 'white'; 
        mensagem4.textContent = '';
        mensagem4.classList.add('esconder');
        mensagem4.classList.remove('exibir');
    }
})

botaoValidar2.addEventListener('click', function(){
    
    if(inputdsS.value == ''){
        inputdsS.style.backgroundColor = 'red';
        inputdsS.style.borderColor = 'black';
        mensagem5.innerHTML = "Descrição do Serviço não informada<br>";
        mensagem5.classList.add('exibir');
        mensagem5.classList.remove('esconder')
    }else{
        inputdsS.style.backgroundColor = 'green';
        inputdsS.style.color = 'white'; 
        mensagem5.textContent = '';
        mensagem5.classList.add('esconder');
        mensagem5.classList.remove('exibir');
    }

    if(inputValorPC.value == ''){
        inputValorPC.style.backgroundColor = 'red';
        inputValorPC.style.borderColor = 'black';
        mensagem6.innerHTML = "Valor em Peças não informada<br>";
        mensagem6.classList.add('exibir');
        mensagem6.classList.remove('esconder')
    }else{
        inputValorPC.style.backgroundColor = 'green';
        inputValorPC.style.color = 'white'; 
        mensagem6.textContent = '';
        mensagem6.classList.add('esconder');
        mensagem6.classList.remove('exibir');
    }
    var numeroO = inputValorPC
    function ValorMaoObra(o){
        return(o * 50 / 100)
    }
    resultadoO = ValorMaoObra(numeroO)
    console.log(resultadoO)

    if(inputValorMO.value == '' || inputValorMO.value > resultadoO ){
        inputValorMO.style.backgroundColor = 'red';
        inputValorMO.style.borderColor = 'black';
        mensagem7.innerHTML = "Valor Mão de Obra não informado<br>";
        mensagem7.classList.add('exibir');
        mensagem7.classList.remove('esconder')
    }else{
        inputValorMO.style.backgroundColor = 'green';
        inputValorMO.style.color = 'white'; 
        mensagem7.textContent = '';
        mensagem7.classList.add('esconder');
        mensagem7.classList.remove('exibir');
    }
})

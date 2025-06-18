var bntValidar = document.getElementById('bntValidar');
var inputNome = document.getElementById('nome');
var inputIdade = document.getElementById('idade');
var inputCpf = document.getElementById('cpf');
var msgGeral = document.getElementsByClassName('msg-geral')[0]
var bntProximo = document.getElementById('selectOP')
var inputSelect = document.getElementById('select')
var fisicod = document.getElementsByClassName('fisicod')[0]
var juridicod = document.getElementsByClassName('juridicod')[0]
bntProximo.addEventListener('click', function(){
    

    if(inputSelect.value == 'fisico'){
        juridicod.classList.add('esconder');
        juridicod.classList.remove('exibir');
        fisicod.classList.add('exibir');
        fisicod.classList.remove('esconder');
    }else if (inputSelect.value == 'juridico') {
        fisicod.classList.remove('exibir');
        fisicod.classList.add('esconder');
        juridicod.classList.add('exibir');
        juridicod.classList.remove('esconder');
    }else{
        fisicod.classList.remove('exibir');
        fisicod.classList.add('esconder');
        juridicod.classList.add('esconder');
        juridicod.classList.remove('exibir');
    }
    
})

bntValidar.addEventListener('click', function(){
    let msgErro = '';
    let indiceEspcao = inputNome.value.trim().indexOF(' ');

    if(inputNome.value == '' || indiceEspcao == -1) {
        inputNome.style.backgroundColor = 'red';
        inputNome.style.border = '1px solid red';
        msgErro += '<br>* Informe Nome e Sobrenome';
    } else {
        inputNome.style.backgroundColor = 'white';
        inputNome.style.border = 'none';
    };

})
// if (inputIdade.value == '' || parseInt(inputIdade.value) <18 || parseInt(inputIdade.)){
    //     inputIdade.style.backgroundColor = 'red';
    //     inputIdade.style.border = '1px solid red';
    //     msgErro += '<br>* Idade deve ser maior que 18 e menor que 60 !';
    // } else {
    //     inputIdade.style.backgroundColor = 'white';
    //     inputIdade.style.border = 'none';
    // }

    // let cpf = inputCpf.value;


var btnValidar = document.getElementById('btnValidar');
var inputNome = document.getElementById('nome');
var inputIdade = document.getElementById('idade');
var inputcpf = document.getElementById('cpf');
var selectS = document.getElementById('sexo');
var msgNome = document.getElementsByClassName('msgNome')[0];
var msgNome2 = document.getElementsByClassName('msgNome')[1];
var msgNome3 = document.getElementsByClassName('msgNome')[2];
var msgNome4 = document.getElementsByClassName('msgNome')[3];
var msgGeral = document.getElementsByClassName('msgGeral')[0];
var msgGeral2 = document.getElementsByClassName('msgGeral')[1];
var msgGeral3 = document.getElementsByClassName('msgGeral')[2];
var msgGeral4 = document.getElementsByClassName('msgGeral')[3];

btnValidar.addEventListener('click', function() {
    
    if(inputNome.value == ''){
        console.log('nome não informado!');
        inputNome.style.backgroundColor = 'red';
        inputNome.style.borderColor = 'black';
        msgNome.style.display = 'block';
        msgGeral.textContent = "nome não informado: ";
        msgGeral.classList.remove('esconder');
        msgGeral.classList.add('exibir');
    }else{
        console.log('nome informado: ' + inputNome.value);
        inputNome.style.backgroundColor = 'green';
        inputNome.style.color = 'white';
        msgNome.style.display = 'none'; 
        msgGeral.textContent = '';
        msgGeral.classList.add('esconder');
        msgGeral.classList.remove('exibir');
    }

    if(inputIdade.value == ''){
        console.log('Idade não informada!');
        inputIdade.style.backgroundColor = 'red';
        inputIdade.style.borderColor = 'black';
        msgNome2.style.display = 'block';
        msgGeral2.textContent = "Idade não informada: ";
        msgGeral2.classList.remove('esconder');
        msgGeral2.classList.add('exibir');
    }else{
        console.log('idade informada: ' + inputIdade.value);
        inputIdade.style.backgroundColor = 'green';
        inputIdade.style.color = 'white';
        msgNome2.style.display = 'none'; 
        msgGeral2.textContent = '';
        msgGeral2.classList.add('esconder');
        msgGeral2.classList.remove('exibir');
    }

    if(inputcpf.value == ''){
        console.log('CPF não informado!');
        inputcpf.style.backgroundColor = 'red';
        inputcpf.style.borderColor = 'black';
        msgNome3.style.display = 'block';
        msgGeral3.textContent = "CPF não informado: ";
        msgGeral3.classList.remove('esconder');
        msgGeral3.classList.add('exibir');
    }else{
        console.log('CPF informado: ' + inputcpf.value);
        inputcpf.style.backgroundColor = 'green';
        inputcpf.style.color = 'white';
        msgNome3.style.display = 'none'; 
        msgGeral3.textContent = '';
        msgGeral3.classList.add('esconder');
        msgGeral3.classList.remove('exibir');
    }

});
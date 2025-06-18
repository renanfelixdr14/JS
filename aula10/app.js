var inputID = document.getElementById('id')
var inputNome = document.getElementById('nome')
var selectSexo = document.getElementById('sexo')
var selectStatus = document.getElementById('status')
var btGravar = document.getElementById('btnGravar')
var btLimpar = document.getElementById('btnLimpar')
var btSexo = document.getElementsByClassName('btSexo')
var divAlert = document.getElementById('alert')
const pessoas = [];

ExibirAll();

btGravar.addEventListener('click', function(){
    var errosEncontrados = validaCadastro();
    if (errosEncontrados != '') {
        exibeAlert(errosEncontrados, 'ERRO')
        return
    }

    if (localStorage.getItem('pessoas') == null) {
        var pessoas = [];
    } else {
        var pessoas = localStorage.getItem('pessoas')
        pessoas = JSON.parse(pessoas);
    }

    if(validaCadastro() == ''){
    if(inserindo()){
    let idcontador = incrementaCodigo();
    pessoas.push({
        id: idcontador,
        nome: inputNome.value,
        sexo: selectSexo.value,
        status: selectStatus.value
    })} else {
            pessoa.forEach(function (ipessoa) {
                if (ipessoa.id == inputID.value) {
                    ipessoa.nome = inputNome.value;
                    ipessoa.sexo = selectSexo.value;
                    ipessoa.status = selectStatus.value;
                }
            })
            localStorage.setItem('pessoas', JSON.stringify(pessoa));
        }} else {

        }
    let idcontador = incrementaCodigo();
    var jsonObj = JSON.stringify(pessoas)
    localStorage.setItem('pessoas', jsonObj)
    localStorage.setItem('identily', idcontador)
    
    ExibirAll();
    exibeAlert('Gravado com Sucesso!', 'SUCESSO')
    CorSexo()
    CorStatus()
})

btLimpar.addEventListener('click', function(){
    localStorage.clear()
    ExibirAll()
})
//

function ExibirAll () {
    var json = localStorage.getItem('pessoas')
    if (json) {
        modeloObj = JSON.parse(json)
    } else {
        modeloObj = [];
    }
    var html = ''
    modeloObj.forEach(function (pessoa) {
        html += `<tr>`
        html += `<td>${pessoa.id}</td>`
        html += `<td>${pessoa.nome}</td>`
        html += `<td><button type="button" class="btSexo btn btn-success btn-danger">${pessoa.sexo}</button></td>`
        html += `<td><button type="button" class="btStatus btn btn-secondary btn-success">${pessoa.status}</button></td>`
        html += `<td><button onclick="excluir(${pessoa.id})" type="button" class="btn btn-danger">Limpar</button> || <button onclick="editar(${pessoa.id})" type="button" class="btn btn-primary">Editar</button></td>`
        html += `</td>`
    })
    document.getElementById('linhas').innerHTML = html
    esconderAlert();
    CorSexo()
    CorStatus()
}

function CorSexo(){
    const btSexo = document.getElementsByClassName('btSexo');
    for (let i = 0; i < btSexo.length; i++) { //percorre os botoes
        const botao = btSexo[i];//constante = class
        if (botao.innerText.trim().toUpperCase() === 'MASCULINO') {
            botao.classList.add('btn-success');
            botao.classList.remove('btn-danger');
        } else {
            botao.classList.add('btn-danger');
            botao.classList.remove('btn-success');
        }
    }
}

function CorStatus() {
    const btStatus = document.getElementsByClassName('btStatus');
    for (let i = 0; i < btStatus.length; i++) { //percorre os botoes
        const botaoStatus = btStatus[i];//constante = class
        if (botaoStatus.innerText.trim().toUpperCase() === 'ATIVO') {
            botaoStatus.classList.add('btn-success');
            botaoStatus.classList.remove('btn-secondary');
        } else {
            botaoStatus.classList.add('btn-secondary');
            botaoStatus.classList.remove('btn-success');
        }
    }
}

function incrementaCodigo(){
    let identily = localStorage.getItem('identily')
    if (identily == null) {
        identily = 0
    } else {
        identily = parseInt(localStorage.getItem('identily'));
    }

    return identily += 1
}

function validaCadastro() {
    let erros = '';
    if (inputNome.value == '') {
        erros += 'Informe o Nome<br>'
    }

    if (selectSexo.value == '') {
        erros += 'informe o sexo<br>'
    }

    if (selectStatus.value == '') {
        erros += 'informe o status<br>'
    }

    return erros
}

function exibeAlert(mensagem, tipoMensagem) {
    if (!divAlert) return;
    if (tipoMensagem == 'SUCESSO') {
        divAlert.classList.add('alert-success')
        divAlert.classList.remove('alert-danger')
    }else{
        divAlert.classList.add('alert-danger')
        divAlert.classList.remove('alert-success')
    }
    document.getElementById('alert-message').innerHTML = mensagem;
    divAlert.classList.remove('visually-hidden')
}

function esconderAlert() {
    divAlert.classList.add('visually-hidden')
}

function inserindo() {
    return inputID.value == '';
}

function excluir(id) {
    let pessoa = JSON.parse(localStorage.getItem('pessoas'));
    let novoarray = pessoa.filter((pessoa) => pessoa.id != id)
    localStorage.setItem('pessoas', JSON.stringify(novoarray))
    ExibirAll();
}

function editar(id) {
    let pessoa = JSON.parse(localStorage.getItem('pessoas'));
    let novoarray = pessoa.find((pessoa) => pessoa.id == id)
    if (novoarray) {
        inputID.value = novoarray.id;
        inputNome.value = novoarray.nome;
        selectSexo.value = novoarray.sexo;
        selectStatus.value = novoarray.atividade;
    }
}
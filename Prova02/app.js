var inputID = document.getElementById('id')
var inputTitulo = document.getElementById('titulo')
var inputValor = document.getElementById('valor')
var inputEstoque = document.getElementById('estoque')
var btGravar = document.getElementById('btnGravar')
var btLimpar = document.getElementById('btnLimpar')
var divAlert = document.getElementById('alert')
const produtos = [];

listar();

btGravar.addEventListener('click', function(){
    var errosEncontrados = validaCadastro();
    if (errosEncontrados != '') {
        exibeAlert(errosEncontrados, 'ERRO')
        return
    }

    if (localStorage.getItem('produtos') == null) {
        var produtos = [];
    } else {
        var produtos = localStorage.getItem('produtos')
        produtos = JSON.parse(produtos);
    }
    if (validaCadastro() == '') {
        if (inserindo()) {
            var idproduto = inserindocodigo();
            produtos.push({ 
                id: idproduto,
                titulo: inputTitulo.value,
                valor: inputValor.value,
                estoque: inputEstoque.value 
            })
            localStorage.setItem('codigo', idproduto)
            localStorage.setItem('produtos', JSON.stringify(produtos));
        } else {
            produtos.forEach(function (iproduto) {
                if (iproduto.id = inputID.value) {
                    iproduto.titulo = inputTitulo.value;
                    iproduto.valor = inputValor.value;
                    iproduto.estoque = inputEstoque.value;
                }
            })
            localStorage.setItem('produtos', JSON.stringify(produtos));
        } 
        listar();
    }
    window.location.reload()
})

btLimpar.addEventListener('click', function(){
    localStorage.clear()
    listar()
})

//Functions

function listar() {
    var html = '';
    var produtos = localStorage.getItem('produtos');
    if (produtos == null || produtos == '') {
        var produtos = [];
    } else {
        var produtos = JSON.parse(produtos);
    }
    let tagValor = '';

    if(produto.valor == "0"){
        tagValor = `<span class="badge rounded-pill bg-warning">${produto.valor}</span>`
    } else if (produto.valor < "0"){
        tagValor = `<span class="badge rounded-pill bg-danger">${produto.valor}</span>`
    }else {
        tagValor = `<span class="badge rounded-pill bg-success">${produto.valor}</span>`
    }
    produtos.forEach(function (produto) {
        html += `<tr>`
        html += `<td>${produto.id}</td>`;
        html += `<td>${produto.titulo}</td>`;
        html += `<td>${produto.valor}</td>`;
        html += `<td><button data-estoque="${produto.estoque}" class="btn btEstoque btn-success btn-warning btn-danger">${produto.estoque}</td>`;
        html += `<td><button data-id="${produto.id}" onclick="editar(${produto.id}), window.scrollTo(0, 0)" class="btn btn-primary">Editar</button></td> <td><button data-id="${produto.id}" onclick="ZerarEstoque(${produto.id})" class="btn btn-warning">Zerar Estoque</button></td>`;  
        html += `</tr>`
    });
    linhas.innerHTML = html
    esconderAlert();
}

function validaCadastro() {
    let erros = '';
    if (inputTitulo.value == '') {
        erros += 'Informe o Titulo do Produto<br>'
    }

    if (inputValor.value == '') {
        erros += 'informe o Valor do Produto<br>'
    }

    if (inputEstoque.value == '') {
        erros += 'informe o Estoque do Produto<br>'
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

function inserindo() {
    return inputID.value == '';
}

function inserindocodigo() {
    codigo = localStorage.getItem('codigo');

    if (codigo == null || codigo == '') {
        codigo = 0;
    }
    else {
        codigo = parseInt(codigo)
    }

    return codigo += 1
}

function editar(id) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    let novoarray = produtos.find((produto) => produto.id == id)
    if (novoarray) {
        inputID.value = novoarray.id;
        inputTitulo.value = novoarray.titulo;
        inputValor.value = novoarray.valor;
        inputEstoque.value = novoarray.estoque;
    }
}

function ZerarEstoque(id) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    let novaquantidade = produtos.find((produto) => produto.id == id)
    if (novaquantidade) {
        novaquantidade.estoque = 0;
    }
    localStorage.setItem('produtos', JSON.stringify(produtos));
    listar();
}

function esconderAlert() {
    divAlert.classList.add('visually-hidden')
}

function CorEstoque() {
    let tagValor = '';

    if(produto.valor == "0"){
        tagValor = `<span class="badge rounded-pill bg-warning">${produto.valor}</span>`
    } else if (produto.valor < "0"){
        tagValor = `<span class="badge rounded-pill bg-danger">${produto.valor}</span>`
    }else {
        tagValor = `<span class="badge rounded-pill bg-success">${produto.valor}</span>`
    }
}
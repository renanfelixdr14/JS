var nome = document.getElementById('nome');
var sexo = document.getElementById('sexo');
var atividade = document.getElementById('atividade');
var adicionar = document.getElementById('adicionar');
var linhas = document.getElementById('linha');
let inputid = document.getElementById('id');
var avisos = document.getElementById('paragrafo');

listar();

adicionar.addEventListener('click', function () {
    if (localStorage.getItem('pessoas') == null || localStorage.getItem('pessoas') == '') {
        var pessoa = [];
    } else {
        var pessoa = JSON.parse(localStorage.getItem('pessoas'));
    }
    if (validacao() == '') {
        if (inserindo()) {
            var idpessoa = inserindocodigo();
            pessoa.push({ id: idpessoa, nome: nome.value, sexo: sexo.value, atividade: atividade.value })
            localStorage.setItem('codigo', idpessoa)
            localStorage.setItem('pessoas', JSON.stringify(pessoa));
        } else {
            pessoa.forEach(function (ipessoa) {
                if (ipessoa.id == inputid.value) {
                    ipessoa.nome = nome.value;
                    ipessoa.sexo = sexo.value;
                    ipessoa.atividade = atividade.value;
                }
            })
            localStorage.setItem('pessoas', JSON.stringify(pessoa));
        }
        listar();
    }
    else {
        avisos.innerHTML = validacao();
    }
})


function listar() {
    var html = '';
    var lpessoas = localStorage.getItem('pessoas');
    if (lpessoas == null || lpessoas == '') {
        var lpessoa = [];
    } else {
        var lpessoa = JSON.parse(lpessoas);
    }
    lpessoa.forEach(function (item) {
        html += `<tr>`
        html += `<td>${item.id}</td>`;
        html += `<td>${item.nome}</td>`;
        html += `<td>${item.sexo}</td>`;
        html += `<td>${item.atividade}<td>`;
        html += `<td><button data-id="${item.id}" onclick="excluir(${item.id})">Excluir</button><td>`;
        html += `<td><button data-id="${item.id}" onclick="editar(${item.id})">Excluir</button><td>`;
        html += `</tr>`
    });
    linhas.innerHTML = html
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

function excluir(id) {
    let pessoa = JSON.parse(localStorage.getItem('pessoas'));
    let novoarray = pessoa.filter((pessoa) => pessoa.id != id)
    localStorage.setItem('pessoas', JSON.stringify(novoarray))
    listar();
}

function editar(id) {
    let pessoa = JSON.parse(localStorage.getItem('pessoas'));
    let novoarray = pessoa.find((pessoa) => pessoa.id == id)
    if (novoarray) {
        inputid.value = novoarray.id;
        nome.value = novoarray.nome;
        sexo.value = novoarray.sexo;
        atividade.value = novoarray.atividade;
    }
}

function inserindo() {
    return inputid.value == '';
}

function validacao() {
    var aviso = ''
    if (nome.value == '') {
        aviso += `Campo nome Vazio <br>`;
    }
    if (nome.value == '') {
        aviso += `Campo Sexo Vazio <br>`;
    }
    if (nome.value == '') {
        aviso += `Campo Status Vazio <br>`;
    }

    if (aviso == '') {
        return ''
    }
    else {
        return aviso
    }
}
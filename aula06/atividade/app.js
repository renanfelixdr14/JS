var bntgravar = document.getElementById('gravar')
var bntexibir = document.getElementById('exibir')
var inputID = document.getElementById('id')
var inputDescricao = document.getElementById('descricao')
var SelectTabela = document.getElementById('tabela')
var SelectCategorias = document.getElementById('categorias')
var tabela = {};
var DivExibir = document.getElementById('div')

function exibirtabela() {
    DivExibir.innerHTML = `
    <p>ID: ${tabela.id}</p>
    <p>Descrição: ${tabela.descricao}</p>
    <p>Preço: ${tabela.preco}</p>
    <p>Categoria: ${tabela.categoria}</P>`
}

function criacaotabela() {
    tabela.id = inputID.value
    tabela.descricao = inputDescricao.value
    tabela.preco = SelectTabela.value
    tabela.categoria = SelectCategorias.value
}

bntgravar.addEventListener('click', function(){
    criacaotabela()
    console.log(tabela)
    exibirtabela()
})

bntexibir.addEventListener('click', exibirtabela())
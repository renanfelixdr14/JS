var btnGravar = document.getElementById('btnGravar')
var btnLimpar = document.getElementById('btnLimpar')
var btnExcluir = document.getElementById('btnExcluir')
var nome = document.getElementById('nome')
var criacao = document.getElementById('criacao')
var bestmusic = document.getElementById('bestmusic')
var btnExcluirId = document.getElementById('btnExcluirId')

ExibirAll()

btnGravar.addEventListener('click', function(){

    if (localStorage.getItem('bandas') == null) {
        var bandas = [];
    } else {
        var bandas = localStorage.getItem('bandas')
        bandas = JSON.parse(bandas);
    }

    bandas.push({ 
        nome: nome.value,
        criação: criacao.value,
        bestmusic: bestmusic.value

    })

    var jsonObj = JSON.stringify(bandas)
    localStorage.setItem('bandas', jsonObj)
    
    ExibirAll()
})

btnLimpar.addEventListener('click', function(){
    limparCampos();
})

btnExcluir.addEventListener('click', function(){
    localStorage.clear();
    ExibirAll();
})

//
function ExibirAll () {
    var json = localStorage.getItem('bandas')
    if (json) {
        modeloObj = JSON.parse(json)
    } else {
        modeloObj = []
    }
    var html = ''
    modeloObj.forEach(function (banda) {
        html += `<tr>`
        html += `<td>${banda.nome}</td>`
        html += `<td>${banda.criação}</td>`
        html += `<td>${banda.bestmusic}</td>`
        html += `<td><button type="button" id="btnExcluirId">Excluir</button></td>`
        html += `</td>`
    })
    document.getElementById('linhas').innerHTML = html
}
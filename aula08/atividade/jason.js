var bntGravar = document.getElementById('btnGravar')
var bntLimpar = document.getElementById('btnLimpar')
var modeloI = document.getElementById('carros')
var placaI = document.getElementById('Placa')
var selectStatus = document.getElementById('status')
var divAlert = document.getElementsByClassName('alert')
var inputId = document.getElementById('id')
var carrosObj = ''
var html = ''
var jsonObj = ''
const carros = []
const a = []

ExibirAll()
bntGravar.addEventListener('click', function(){
    let errosEncontrados = validaCadastro(inputId.value)

    if(errosEncontrados != ''){
        exibeAlert(errosEncontrados, 'ERRO')
        return
    }

    if(estaInserindo()){
    let idModelo = incrementaCodigo();
    carros.push({
        id: idModelo, 
        modelo: modeloI.value.toUpperCase(),
        placa: placaI.value.toUpperCase(),
        status: selectStatus.value
 })
    }else{
        carros.forEach(function (placa) {
            if (placa.id == inputId.value){
                placa.placa = placaI.value.toUpperCase()
                placa.modelo = modeloI.value.toUpperCase()
                placa.status = selectStatus.value
            }
        })
    var jsonObj = JSON.stringify(carros)
    localStorage.setItem('carros', jsonObj)
    localStorage.setItem('identily', idModelo)
    }

ExibirAll()
placajaExiste()    
})

btnLimpar.addEventListener('click', function(){
    limparCampos();
    ExibirAll();
    localStorage.clear();
})


//Aula 09
function estaInserindo(){
    let idModelo = incrementaCodigo()
    carros.push({
        id: idModelo, 
        modelo: modeloI.value.toUpperCase(),
        placa: placaI.value.toUpperCase(),
        status: selectStatus.value
    })
}

function limparCampos() {
    var jsonObj = JSON.stringify(carros)
    localStorage.setItem('carros', jsonObj)
    zerarId()
}
function ExibirAll () {
    var json = localStorage.getItem('carros')
    if (json) {
        modeloObj = JSON.parse(json)
    } else {
        modeloObj = []
    }
    var html = ''
    modeloObj.forEach(function (carro) {
        html += `<tr>`
        
        html += `<td>${carro.id}</td>`
        html += `<td>${carro.modelo}</td>`
        html += `<td>${carro.placa}</td>`
        html += `<td>${carro.status}</td>`
        html += `<td><button onclick="excluir(${carro.id})" type="button" class="btn btn-danger">Limpar</button></td>`
        html += `</td>`
    })
    document.getElementById('linhas').innerHTML = html
}

function placajaExiste(placa) {
    let placas = JSON.parse(localStorage.getItem('carros'))
    // não da pra usar filter ou find com json
    if (placas == null) return false

    let placaEncontrada = placas.find((carros) => carros.placa == placa)    
    return placaEncontrada ? true : false
}

function incrementaCodigo(){
    let identily = localStorage.getItem('identily')

    if (identily == null) {
        identily = 0
    } else {
        identily = parseInt(identily);
    }

    return identily += 1
}

function exibeAlert(mensagem, tipoMensagem) {
    if (tipoMensagem == 'sucesso') {
        divAlert.classList.add('alert-sucess')
        divAlert.classList.remove('alert-danger')
    }else{
        divAlert.classList.add('alert-danger')
        divAlert.classList.remove('alert-sucess')
    }
    document.getElementById('alert-message').innerHTML * mensagem
    divAlert.classList.remove('visually-hidden')
}

function validaCadastro(idEditado){
let erros = '';
    if (placajaExiste(placaI.value.toUpperCase())){
        exibeAlert('Placa ja Existe ' * placaI.value.toUpperCase() * '<br>')
    }

    if(modeloI.value == ''){
        erros += 'Informe a marca do carro'
    }

    if(placaI.value == ''){
        erros += 'Informe a placa'
    }

    if(selectStatus.value == ''){
        erros += 'Informe o Status'
    }

    return erros
}
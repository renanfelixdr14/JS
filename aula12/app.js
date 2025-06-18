var inputNome = document.getElementById('Nome')
var inputID = document.getElementById('id')
var inputPrivilegio = document.getElementById('privilegio')
var btGravar = document.getElementById('btnGravar')
var btLimpar = document.getElementById('btnLimpar')
var btMostrar = document.getElementById('btMostrar')
var forM = document.getElementById('forM')
const pessoas = [];
var API = `https://appwll.com.br/api/funcionarios`;

carregarFuncionarios();

btGravar.addEventListener('click', async function() {
     if (inputID.value == ""){
        cadastrar(inputNome.value, inputPrivilegio.value);
    }if (inputID.value != "") {
        enviaredi(inputID.value, inputNome.value, inputPrivilegio.value);
    }
    

    carregarFuncionarios();

})

btMostrar.addEventListener('click', async function(){

    let response = await fetch(API);
    let apiJson = await response.json();
    
carregarFuncionarios();

});



//Puxando Dados diretamente da API para a tela
async function carregarFuncionarios() {
    let response = await fetch(API);
    let apiJson = await response.json();
    let linhas = "";

    apiJson.forEach((clt) => {
        linhas += `<tr>`;
        linhas += `<td>${clt.id}</td>`;
        linhas += `<td>${clt.nome}</td>`;
        linhas += `<td>${clt.privilegio_id}</td>`;
        linhas += `<td>${clt.privilegio}</td>`;
        linhas += `<td><button class="btn btn-info" onClick="editar(${clt.id})">Editar</button></td>`;
        linhas += `<td><button class="btn btn-danger" onClick="excluir(${clt.id})">Excluir</button></td>`;
        linhas += `</tr>`;
    });

    conteudo.innerHTML = linhas;
}
//Deletando diretamente da API
async function excluir(id){
    let deleteFromAPI = `https://appwll.com.br/api/funcionarios/${id}`;
    deleteFromAPI = await fetch(deleteFromAPI,{
        method:'DELETE'
    })
    
    carregarFuncionarios();   
}

async function editar(id){
    let response = await fetch("https://appwll.com.br/api/funcionarios");
    let apiJson = await response.json();
    let funcionario = apiJson.filter((nome) => nome.id == id)

        funcionario.forEach((func) => {
            inputID.value = id;
            inputNome.value = func.nome;
            inputPrivilegio.value = func.privilegio;
        })

}
async function cadastrar(nome, privilegio) {
    var forM = document.getElementById('forM')
    FormData = new FormData(forM);
        FormData.append( nome, inputNome.value)
        FormData.append( privilegio, inputPrivilegio.value)
    
    let response = await fetch(API,{
        method: 'POST',
        body: FormData
    });
    carregarFuncionarios();
}

async function enviaredi(id, nome, privilegio){
    const response = await fetch(API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        
        body: new URLSearchParams({id: id, nome: nome, privilegio: privilegio })
        
      });
      carregarFuncionarios();
}
    

var consultarCEP = document.getElementById('btn');
var inputCEP = document.getElementById('cep');
var inputLogradouro = document.getElementById('Logradouro');
var inputBairro = document.getElementById('Bairro');
var inputCidade = document.getElementById('Cidade');
var erro = document.getElementById('erro');


/*consultarCEP.addEventListener('click', async function(){
 let url = "https://viacep.com.br/ws/18136280/json";

 let response = await fetch(url);

 let cep = await response.json();

//let objCep = JSON.parse(cep);

console.log(cep.logradouro)

}); */

//Para lidar com função que usa await, é necessário que ela seja async function
consultarCEP.addEventListener('click', async function(){
    erro.classList.remove('mostrar');
    erro.classList.add('esconder');
    let newCep = parseInt(inputCEP.value);
    //Insere os valores do campo na requisição da API
    let url = `https://viacep.com.br/ws/${newCep}/json`;

    //Tenta fazer a busca de dados da API e se retornar dados, insere na variavel
 let response = await fetch(url);

//Verificar dados da variavel
 console.log(response);
//Após receber os dados, transfere eles para um objeto 
let cep = await response.json();

//Se não acha o cep e retorna erro, ele mostra o erro, se não, preenche os campos vazios
if (cep.erro == "true"){
    erro.classList.add('mostrar');
    erro.classList.remove('esconder');
    erro.innerHTML = "CEP invalido!";
} else {
     inputLogradouro.value = cep.logradouro;
    inputBairro.value = cep.bairro;
    inputCidade.value = cep.localidade;
 
}
});


function limpar(){
    inputBairro.value = "";
    inputCEP.value = "";
    inputCidade.value = "";
    inputLogradouro.value = "";
    console.clear();
}

  
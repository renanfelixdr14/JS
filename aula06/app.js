// var pessoa = {
//     nome: 'joão',
//     idade: 20,
//     salario: 5000,
//     altura: 1.80,
//     Casado: true,
//     conhecimentos: [
//         'php','java','js'
//     ]
// }
// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(`Nome: ${pessoa.nome}  Idade: ${pessoa.idade}`)

// var salarioNovo = pessoa.salario + 500;
// console.log(`Salario: ${salarioNovo}`)
//
var btnValidar = document.getElementById('btnValidar');
var nomeF = document.getElementById('nome');
var idadeF = document.getElementById('idade');
var alturaF = document.getElementById('altura');
var casadoF = document.getElementById('casado');
var conhecimentosF = document.getElementById('conhecimentos');
var ckbPhp = document.getElementById('php');
var ckbJs = document.getElementById('js');
var ckbJava = document.getElementById('java');
var pessoa = {}
// btnValidar.addEventListener('click', function(){
//     var pessoa = {
//         nome: nomeF.value,
//         idade: parseInt(idadeF.value),
//         altura: parseFloat(alturaF.value),
//         casado: casadoF.value,
//     }
// console.log(pessoa)
// })
btnValidar.addEventListener('click', function(){
    var pessoa = {
        nome: nomeF.value,
        idade: parseInt(idadeF.value),
        altura: parseFloat(alturaF.value),
        casado: casadoF.value,
    }
console.log(pessoa)
})
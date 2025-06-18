//pode ser vazio
const pessoas = [
    { id: 1, nome: 'João', idade: 25, sexo: 'M', salario: 2000},
    { id: 2, nome: 'Maria', idade: 30, sexo: 'F', salario: 2100},
    { id: 3, nome: 'Pedro', idade: 35, sexo: 'M', salario: 4000},
    { id: 4, nome: 'Ana', idade: 28, sexo: 'F', salario: 5000},
    { id: 5, nome: 'Lucas', idade: 22, sexo: 'M', salario: 1000},
    { id: 6, nome: 'Julia', idade: 27, sexo: 'F', salario: 2600},
    
];

// var jasonobgj = JSON.stringify(pessoas);
// console.log(jasonobgj);

// var objetos = JSON.parse(jasonobgj);
// console.log(objetos)

// localStorage.setItem('materia', 'programação para sitios')

// var materia = localStorage.getItem('materia')
// console.log(materia)

// localStorage.removeItem('materia')

// localStorage.setItem('fatec', 'segunda-feira')
// localStorage.setItem('materia', 'programação para sitios')

// localStorage.clear()

//tornar o array em string
var jsonObj = JSON.stringify(pessoas)
localStorage.setItem('pessoas', jsonObj)

//transformando a string em tabela JSON
var pessoasObj = JSON.parse(localStorage.getItem('pessoas'))
console.log(pessoasObj)

//formantando o html pra tabela
var html = ''
pessoasObj.forEach(function (pessoa) {
    html += `<tr>`
    html += `<td>${pessoa.id}</td>`
    html += `<td>${pessoa.nome}</td>`
    html += `<td>${pessoa.idade}</td>`
    html += `<td>${pessoa.sexo}</td>`
    html += `<td>${pessoa.salario}</td>`
    html += `</td>`
})

document.getElementById('linhas').innerHTML = html
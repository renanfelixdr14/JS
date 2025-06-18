// let paragrafo1 = document.getElementById('p1');
// // console.log(paragrafo1);

// // console.log(paragrafo1.textContent);

// let paragrafos = document.getElementsByTagName('p');

// console.log(paragrafos);

// console.log(paragrafos[2].textContent);

// let tagP = document.querySelector('p');

// console.log(tagP);
// let elementop1 = document.querySelector('#p1');

// let classPteste = document.querySelector('.p-teste');

// if (classPteste != null) {
//     console.log('Existe');
// }

// let pClass = document.getElementsByClassName('p-teste');
// console.log(pClass);

// let paragrafos = document.getElementsByTagName('p');

// console.log(paragrafos[2].textContent);

// console.log(document.getElementsByTagName('p')[2].textContent);
// //
// console.log(paragrafos[2].textContent);
// let texto = document.getElementsByTagName('p')[2];
//

// console.log(paragrafos[2].textContent);
// let texto = document.getElementsByClassName
// console.log(texto);
// let text2

let botao = document.getElementById('botao');

botao.addEventListener('click', function(){
    
    // //console.log('clicou');
    let paragrafo1 = document.getElementById('p1');
    // let paragrafo2 = document.getElementById('p2');
    // let paragrafo3 = document.getElementById('p3');
    let txt1 = document.getElementById('txtMensagem');
    let txt2 = document.getElementById('txtMensagem2');
    let resultado = (parseInt(txt1.value) + parseInt(txt2.value));

    paragrafo1.textContent = 'Soma' + " = " + resultado;

    // let txt5 = document.getElementById('txtMensagem5');
    // let txt6 = document.getElementById('txtMensagem6');
    // let resultado3 = (parseInt(txt5.value) / parseInt(txt6.value));

    // let txt7 = document.getElementById('txtMensagem7');
    // let txt8 = document.getElementById('txtMensagem8');
    // let resultado4 = (parseInt(txt7.value) * parseInt(txt8.value));

    console.log(resultado);
    console.log(paragrafo1.textContent);
    // paragrafo3.textContent = paragrafo1.textContent;
    // paragrafo1.textContent = 'Texto alterado';
    // paragrafo2.textContent = paragrafo1.textContent + ' - ' +   paragrafo1.textContent;
    
    // paragrafo1.textContent = txt.value;
    // paragrafo3.textContent = paragrafo1.textContent;
    // paragrafo2.textContent = paragrafo1.textContent + ' - ' +   paragrafo3.textContent;

});

let botao2 = document.getElementById('botao2');

botao2.addEventListener('click', function(){

    let paragrafo2 = document.getElementById('p2');
    let txt3 = document.getElementById('txtMensagem3');
    let txt4 = document.getElementById('txtMensagem4');
    let resultado2 = (parseInt(txt3.value) - parseInt(txt4.value));
    paragrafo2.textContent = 'Subtração = ' + resultado2;
    
    console.log(resultado2);
    console.log(paragrafo2.textContent);

});

let botao3 = document.getElementById('botao3');

botao3.addEventListener('click', function(){

    let paragrafo3 = document.getElementById('p3');
    let txt5 = document.getElementById('txtMensagem5');
    let txt6 = document.getElementById('txtMensagem6');
    let resultado3 = (parseInt(txt5.value) / parseInt(txt6.value));
    paragrafo3.textContent = 'Divisão = ' + resultado3;

    console.log(resultado3);
    console.log(paragrafo3.textContent);

}); 

let botao4 = document.getElementById('botao4');
botao4.addEventListener('click', function(){
    let paragrafo4 = document.getElementById('p4');
    let txt7 = document.getElementById('txtMensagem7');
    let txt8 = document.getElementById('txtMensagem8');
    let resultado4 = (parseInt(txt7.value) * parseInt(txt8.value));
    paragrafo4.textContent = 'Multiplicação = ' + resultado4;

    console.log(resultado4);
    console.log(paragrafo4.textContent);

});
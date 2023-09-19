function exercicio1(){

let numero = prompt (" digite um numero)");

if ((numero % 2) == 0){
alert (" o numero é par");

}
else {
    alert("o numero é impar");
}
}


function exercicio2(){

    let numero = prompt ("digite um numero de 1 a 9");
    let numero2 = prompt("digite outro numero");

    if ( numero > numero2){
        alert (`o ${numero} é maior que ${numero2}`);
    }
    else if (numero == numero2) { 
        alert(` ${numero} é igual a ${numero2}`);
    }
    else if(numero < numero2){
        alert (` ${numero} é menor que ${numero2}`);
    }
}

 function exercicio3(){

let idoso = prompt(" Voce tem 65 ou mais de 65 anos?");
let gestante = prompt ("voce é gestante?");
let deficiente = prompt ("voce tem algum tipo de deficiencia?");

idoso = idoso.toLowerCase();
gestante = gestante.toLowerCase();
deficiente = deficiente.toLowerCase();

if ((idoso == "sim") || (gestante == "sim") || (deficiente == "sim")) {
alert (" voce ira para fila preferencial");
 }
 else {
     alert ("voce ira para fila normal");
 }

 }

 function exercicio4(){

 idade = prompt (" Quantos anos voce tem?");

 if (idade < 16){


 alert (" Voce não pode entrar, SAIA");
 }

 else if ((idade >=16) && (idade <18)){
     alert (" se voce não possui acompanhante, SAIA");
    }
    else if (idade >=18){
    
       alert("voce pode entrar");
    }
}


function exercicio5(){

let login = "rod123";
let senha = "*****";

    logindigitado = prompt (" Digite seu login");
senhadigitada = prompt ("digite sua senha");

if ((senhadigitada == senha ) && ( logindigitado == login)){
alert ("seja bem vindo")
}

else if ((logindigitado != login) && (senhadigitada != senha )){
alert ("senha e login digitados estão incorretos");
}

else if (senhadigitada != senha){
    alert ("a senha esta incorreta");
} 
else if (logindigitado != login){
    alert ("o login digitado esta errado");
}
}

function exercicio6(){

    
resposta1 = prompt ("qual é o planeta mais perto do sol? \n 1- Mercurio \n 2- Marte \n 3- Venus \n 4- Uranus")
resposta1 = resposta1.toLowerCase ();


if ((resposta1 === "1") || (resposta1 === "mercurio")){
    alert ("certo")
    
}

else {
    alert ("Voce errou")
}

resp2 = prompt ("quem é o mais esperto da sala? \n 1- Rodrigo Lima \n 2- Lucas Lima \n Romulo")
resp2 = resp2.toLowerCase ();
if ((resp2 === "1") || (resp2 === "Rodrigo Lima")){
    alert ("voce acertou")
}

else{
    alert ("voce errou")
}

rep3 = prompt ("em que ano foi inventado a priemira linguagem de programação? \n 1- 1945 \n 2- 1810 \n 3- 1843 \n 4- 1838")
rep3 = rep3.toLowerCase ();

if ((rep3 === "3" ) || (rep3 === "1843")){
alert ("Voce acertou") 
} 
else { 
    alert("voce errou" )
}

}

function exercicio7(){

    let resp1 = prompt("em que ano foi inventado a priemira linguagem de programação? \n 1- 1945 \n 2- 1810 \n 3- 1843 \n 4- 1838");
    let resp2 = parseInt(prompt("quem é o mais esperto da sala? \n 1- Rodrigo Lima \n 2- Lucas Lima \n Romulo"));
    let resp3 = prompt("qual é o planeta mais perto do sol? \n 1- Mercurio \n 2- Marte \n 3- Venus \n 4- Uranus");
    let acerto = 0;
    let erro = 0;
    
    if (resp1 == "3")  {
        acerto ++;

    }else {
        erro++;
    } 
    
    if (resp2 == "1"){
        acerto++;

    }else {
        erro++;
    }
    
    if (resp3 == "1") {
        acerto++;
    }else {
        erro++;
    }
    alert (`Voce acertou: ${acerto}`);
    alert (`Voce errou: ${erro}`);




}
exercicio5()
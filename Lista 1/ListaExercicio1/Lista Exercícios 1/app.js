function exercicio1 () {

alert ("seja bem vindo");

alert ("Escolha dois Numeros para somar");

primeiro = prompt ("Diga o primeiro Numero");
segundo = prompt (" Diga o segundo Numero");

var resultado = parseInt(primeiro) + parseInt(segundo);

alert ( "O resultado da soma é: " + resultado);
}

function exercicio2 (){

alert ("Olá, qual o seu nome?");

nome = prompt("qual o seu nome");
Sobrenome = prompt("qual seu sobrenome");

alert (`OLÁ, ${nome} ${Sobrenome}`);
}
function exercicio3 () {

alert ("Digite o Valor que voce quer converter para Dolar");


dindin = prompt ("digite o valor em Real");
resultado = dindin / 4.95;
resultado = resultado.toFixed(2)

alert (`o Resultado convertido em dolar é:  ${resultado}`);


}

function exercicio4 (){

alert ("Antecessor e Sucessor");

number = prompt ("Digite um número inteiro!");
let antecessor = number - 1;
let sucessor = parseInt(number) + 1;

alert (`Seu numero digitado é: ${number} \nSeu antecessor é: ${antecessor}\nSeu sucessor é: ${sucessor}`);


} 

function exercicio5 (){;

   let m2
    
    base = prompt ("Diga o comprimento do terrno");
   
    largura = prompt ("Diga a largura de seu terreno");
   
   alert(`a area em metros2 é: = ${base * largura} metros quadrados`);

   let  = base * largura



alert
   }



function exercicio6 () {



alert ("Calculo de combustivel");
  let kms = prompt ("Quantos kms foram percorridos pelo seu carro?");

   let litros = prompt ("E quantos litros de combustivel foram gastos?");

   let resultado = (litros /kms );


   alert (`seu carro consome em média ${resultado} por quilometro`);


}

function exercicio7(){

alert ("calculadora");

let numero = parseFloat(prompt ('Digite um numero'));
let outroNumero = parseFloat(prompt ("Digite outro numero"));

let resultado;



opcao = prompt ('escolha sua operação \n1.Soma + \n2.Subtraçao - \n3.Divisao / \n4.Multiplicacao *');

switch (opcao) {
   case "+":
      resultado = numero + outroNumero;
      alert(`Resultado da soma é ${resultado}`)
      break;

      case "-":
         resultado  = numero - outroNumero;
         alert(`Resultado da subtração é ${resultado}`)
         break;
         case "/":
            resultado = numero / outroNumero;
            alert(`Resultado da divisão é ${resultado}`)
            break;
            
            case "*":
               resultado = numero * outroNumero;
               alert(`Resultado da divisão é ${resultado}`)
               break;

               default:
                  alert("Essa opção não existe");
}
}


exercicio7();
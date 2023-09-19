function exercicio1 (){

let numero = parseInt(prompt ("Digite um numero de 1 a 59"));

while (numero > 59 && numero == 0){
alert("numero ivalido")
let numero = parseInt(prompt ("Digite um numero de 1 a 59"));

}
for (i = 0; i <= numero; i++){
    console.log(`cronometro iniciado ${i}`);
}




}

function exercicio2 (){

let numero = prompt("De qual numero vc deseja a tabuada?");

for (i = 1; i <=10; i++){
    alert(` ${numero} x ${i} = ${numero * i}`);
}



}




function exercicio3 (){

let numero1 = prompt ("Digite um numero")
let numero2 = prompt ("digite outro numero")

if(numero1 < numero2){
for (let i= numero1; i <= numero2; i++) {
    if ( i % 2 == 0 ) {
        console.log(`Os números pares são: ${i}`);
    }

}
}
if (numero2 < numero1){
    for (i = numero2; i<= numero1; i++){
        if (i % 2 == 0){
            console.log(`os numeros pares sao ${i}`)
        }
    }
}
}


function exercicio5 (){

    let login = "lucas";
    let senha = "12345";
    loguinValidado = false;
    let tentativas = 1;

    let loginDigitado = prompt("Digite seu login");
    loginDigitado = loginDigitado.toLowerCase();

    let senhaDigitada = prompt("Digite sua senha");

    while (!loguinValidado) {

        if ((loginDigitado != login) && (senhaDigitada != senha)) {
            alert("Login e senha estão errados");
            tentativas++;


            loginDigitado = prompt("Digite seu login");
            senhaDigitada = prompt("Digite sua senha");

        } else if (loginDigitado != login) {
            alert("Login digitado está errado!");
            tentativas++;

            loginDigitado = prompt("Digite seu login");
            senhaDigitada = prompt("Digite sua senha");

        } else if (senhaDigitada != senha) {
            alert("Senha digitada está errada!");
            tentativas++;

            loginDigitado = prompt("Digite seu login");
            senhaDigitada = prompt("Digite sua senha");
        }
        
        if (tentativas == 2) {
            alert("Você usou 2 tentativas, próximo erro sua conta será bloqueada!");
        }
        if ((loginDigitado == login) && (senhaDigitada == senha)) {
            alert(`Seja bem vindo, ${loginDigitado}`);
            loguinValidado = true;
    
        }
        else if (tentativas == 3)  {
            alert("Você usou as 3 tentativas, sua conta foi bloqueada!");
    }
        
    }

}
exercicio5 ()

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
        alert(`Os números pares são: ${i}`);
    }

}
}
if (numero2 < numero1){
    for (i = numero2; i<= numero1; i++){
        if (i % 2 == 0){
            alert(`os numeros pares sao ${i}`)
        }
    }
}



}
exercicio3 ()
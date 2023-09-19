function exercicio1 () {

let lista = [];
let opcao; 


alert("Lista de compras");
while (opcao != 3) {
    opcao = prompt (" - Menu - \n1- incluir item \n2- Ver lista \n 3- sair");

    switch (opcao) {
        case "1" : 
        let item = prompt ("oq deseja inserir no carrinho?");
            alert ("item incluido");
            lista.push(item);
            break;

        case "2" : 
            alert (" exibe lista");
            lista.forEach ( item =>alert (item));
            break;
        case "3" : 
            alert ("saindo");
            break;

        default : 
            alert (" insira uma opção valida");

    }
}
}

exercicio1 ()
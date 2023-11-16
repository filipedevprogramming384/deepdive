//Variaveis

    var quantidade = 10;
    var preco_unitario = 6.5;

    //let também cria variáveis
    let preco_final;
    

    console.log(quantidade);
    console.log(preco_unitario);

    preco_final = quantidade * preco_unitario;

    console.log('valor total', preco_final);


    //identificador
        //escolher bom nomes é importante|

    
    //contatenação

    console.log('o preço da caneta BIC é ' + preco_unitario);
    
    
 //Dados básicos em JS
    //verificar o tipo de dados utilizar o typeof

    console.log(typeof preco_unitario);
    // O JS não faz distinção entre números inteiros e números com pontos flutuantes.

    //variável string
    console.log( typeof "teste");

    //variável booleana
    console.log(typeof true);

//constantes
        //const nome

        const a = 10;
       // a = a +10;

        console.log('esta variável é constante ' + a);

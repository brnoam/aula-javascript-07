//** 1)      Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:  **//

//** a) O número de caracteres da string. **//
//** b) A string com todas suas letras em maiúsculo.  **//
//** c) O número de vogais da string.  **//
//** d) A string com todas suas letras em minúsculo. **//
//** e) Fazer a busca pela palavra humanidade e exibir o index onde ela está.**//


var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo"
console.log (texto.length)
console.log (texto.toUpperCase())
console.log (texto.match(/[aeioué]/ig).length)
console.log(texto.toLowerCase())
console.log (texto.indexOf("humanidade"))







//** 2) Percorrer os números pares menores que 100.**//


//** a) Adicionar em um array.**//

//** b) Transformar o array em string. **//

//** c) Exibir no console.**//





var pares = [];
for (n1 = 1; n1 < 100; n1++){
    if (n1 % 2 == 0){

        pares.push(n1)

    }    
} 
console.log(pares.join(' '))
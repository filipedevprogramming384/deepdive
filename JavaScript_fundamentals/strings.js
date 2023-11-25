const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(2));

console.log(escola.charCodeAt(3)) //código relacionado ao unicode
console.log(escola.indexOf('3')) //saber o índice da string

console.log(escola.substring(1)); //mostra o string sem o primeiro índice
console.log(escola.substring(0,3)); // mostra a string de 0 até 3 sem mostra o 3º índice

console.log('Escola '.concat(escola).concat("!"));

console.log(escola.replace(3,'e'));

console.log('Ana, Maria,Pedro'.split(','));



let prompt = require('prompt-sync')();
 
const senhaCorreta = "ella200"; //Defina sua senha aqui
const senhaDigitada = prompt("Digite a senha para acessar a tabuada");

if (senhaDigitada === senhaCorreta){
    let numero = parseInt (prompt('digite um número:'));

for(let i = 0; i <= 10; i++) {
    console.log(numero, "x", i, "=", numero * i);
}
} else {
    console.log("Senha incorreta! Acesso negado.");
}

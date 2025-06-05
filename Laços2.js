let prompt = require('prompt-sync')();
let senha;

do {
  senha = prompt("Digite sua senha:"); 
} while (senha !== "SENAI123");
 
console.log("Acesso concedido!");
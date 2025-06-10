let prompt = require('prompt-sync')();
let senha;

do {
  senha = prompt("Digite sua senha:"); 
} while (senha !== "VTNC123");
 
console.log("Acesso concedido!");
let prompt = require('prompt-sync')();
 
console.log("=== tabuada do 9 ===");

let numero = 9;

for(let i = 1; i <= 10; i++) {
    console.log(numero, "x", i, "=", numero * i);
}

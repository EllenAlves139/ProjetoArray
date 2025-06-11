let numero = require('prompt-sync')();
numero = parseInt(numero('digite um numero: '));

for(let i=1; i<=10; i++)
{
  console.log(numero + '* ' + i +' = ' + (numero * i))
}
for (let i = 0; i < 10; i++) {
if (i === 3) {
continue; // Pula o número 3
}
if (i === 7) {
break; // Para no 7 (não executa o 7)
}
console.log(i); // Saída: 0, 1, 2, 4, 5, 6
}
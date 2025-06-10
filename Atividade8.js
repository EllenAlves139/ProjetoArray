for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    continue; // Pula o número 10
  }
  if (i === 16) {
    break; // Para no 16 (não imprime o 16)
  }
  console.log(i);
}
// Saída: 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15

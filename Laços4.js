const aluno = { nome: "João", curso: "Informática" };
for (let prop in aluno) {
console.log(prop + ": " + aluno[prop]);
}
// Saída: nome: João, curso: Informática
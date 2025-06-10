const aluno = { nome: "karol", curso: "Administração" };
for (let prop in aluno) {
console.log(prop + ": " + aluno[prop]);
}
// Saída: nome: karol, curso: Administração
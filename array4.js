let fichaAluno =[
'joão da silva',    //texto(Nome)
17,                                //Número(Idade) 
true,                             //Booleano(Matriculado?)
{rua: 'Principal', num:123}, //Objeto(Endereço)
['Matemática', 'Português', 'Informática'] //Outro Array (Disciplinas)
];

fichaAluno[3].rua = 'Secundária'; //outra rua
fichaAluno[3].num = '25'; //outro num

console.log("Ficha Completa:",fichaAluno);
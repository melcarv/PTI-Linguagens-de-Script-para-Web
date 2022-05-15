/*

Disciplina: Linguagens de Script para Web
Autor: Mel Menezes Carvalho
Data: 14/05/2022
Objetivo: Este programa tem como objetivo o cálculo de aproveitamento do
rendimento escolar dos alunos de uma turma. Deverá estar preparado para receber 4 notas,
para calcular a sua média.

*/

// toFixed garante que o retorno tenha só duas casas decimais, mas transforma o resultado em string.

const M = (n1, n2, n3, n4) => ((n1*0.1) + (n2*0.2) + (n3*0.3) + (n4*0.4)).toFixed(2);

const n1 = 10
const n2 = 8.5
const n3 = 5.5
const n4 = 9.74

console.log(M(n1, n2, n3, n4));


let vitorias = 111
let derrotas = 10
let resultado = subtrair (vitorias, derrotas)
let nivelRank

function subtrair (vitorias, derrotas){
return vitorias - derrotas;

}

if (resultado <= 10){
nivelRank = "Ferro"
} else if (resultado >= 11 && resultado <= 20){
  nivelRank = "Bronze"
} else if (resultado >= 21 && resultado <= 50){
    nivelRank = "Prata"
} else if (resultado >= 51 && resultado <= 80){
    nivelRank = "Ouro"
} else if (resultado >= 81 && resultado <= 90){
    nivelRank = "Diamante"
} else if (resultado >= 91 && resultado <= 100){
    nivelRank = "Lendário"
} else if (resultado >= 101){
    nivelRank = "Imortal"
}

console.log ( "O Herói tem de saldo de " + resultado + " está no nível de " + nivelRank)
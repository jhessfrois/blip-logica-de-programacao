// Função responsável por calcular o nível do herói
// Recebe como parâmetros o número de vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de vitórias (vitórias - derrotas)
  let saldoVitorias = vitorias - derrotas

  // Variável que irá armazenar o nível do herói
  let nivel = ""

  // Estrutura de decisão para definir o nível
  if (vitorias < 10) {
    nivel = "Ferro"
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze"
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata"
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro"
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante"
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário"
  } else {
    // Caso o número de vitórias seja maior ou igual a 101
    nivel = "Imortal"
  }

  // Retorna a mensagem final com o saldo de vitórias e o nível do herói
  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
}

// ----------------------
// Exemplo de uso do código
// ----------------------

// Define a quantidade de vitórias do jogador
let vitorias = 75

// Define a quantidade de derrotas do jogador
let derrotas = 20

// Chama a função e exibe o resultado no console
console.log(calcularNivel(vitorias, derrotas))
// Criação da classe Heroi
class Heroi {
  // Construtor da classe
  // Recebe nome, idade e tipo do herói
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  // Método atacar
  atacar() {
    let ataque = ""

    // Estrutura de decisão para definir o tipo de ataque
    if (this.tipo === "mago") {
      ataque = "magia"
    } else if (this.tipo === "guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "monge") {
      ataque = "artes marciais"
    } else if (this.tipo === "ninja") {
      ataque = "shuriken"
    }

    // Exibe a mensagem final conforme o enunciado
    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

// ----------------------
// Exemplo de uso
// ----------------------

// Criação de um herói do tipo mago
let heroi1 = new Heroi("Merlin", 150, "mago")
heroi1.atacar()

// Criação de um herói do tipo guerreiro
let heroi2 = new Heroi("Arthur", 35, "guerreiro")
heroi2.atacar()
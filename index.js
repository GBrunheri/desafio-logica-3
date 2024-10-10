
class Herois {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        switch (this.tipo) {
            case "Guerreiro":
                this.habilidade = "Espada"
                break

            case "Mago":
                this.habilidade = "Magia"
                break

            case "Monge":
                this.habilidade = "Artes Marciais"
                break

            case "Ninja":
                this.habilidade = "Shuriken"
                break
        }

        console.log(`${this.nome} atacou usando ${this.habilidade}`)
    }
    }


    let Spartacus = new Herois("Spartacus", 55, "Ninja")
    let Buda = new Herois("Buda", 42, "Monge")
    let Hercules = new Herois("Hercules", 45, "Guerreiro")
    let Zeus = new Herois("Zeus", 33, "Mago")

    Spartacus.atacar()
    Buda.atacar()
    Hercules.atacar()
    Zeus.atacar()
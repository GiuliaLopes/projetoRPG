//Knight ou Sorcerer - guerreiro ou mago
//LitterMosnter ou BigMonster
//definindo as caracteristicas do paticipantes____(personagem por padrao)
class Character {
  // minimo e maximo de vida
  _life = 1;
  maxLife = 1;
  //forca de ataque e de defesa
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name
  }
 //Para n deixar a vida passar de ZERO para isso usamos o get in set e declaramos a vida com _life la em cima
  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this.life;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class LitterMonster extends Character {
  constructor() {
    super('Litter Monster');
    this._life = 40;
    this.attack = 4;
    this.defense = 4;
    this.maxLife = this.life;
  }
}

class BigMonster extends Character {
  constructor() {
    super('Big Monster');
    this._life = 120;
    this.attack = 16;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

///execucao de fato
/*let char = new Knight('Giu');
console.log(char.name);
console.log(char.life);
console.log(char.attack);

let char0 = new Sorcerer('Giu0');
/*console.log(char0.name);
console.log(char0.life);
console.log(char0.attack);

let personagem = new BigMonster();
console.log(personagem.name)
console.log(personagem.attack)*/

//Classes para o cenario. Pondo em tela, faze ataque, como funcionara o ataque e os caracteres do personagemns

//saber quem sao os lutadores e qual o elemento contem as infos dos lutadores. Metodo para atualizar o placar. Acao de atacar

//cenario. Tem o s2 jogadores e os seus elementos
 class Stage {
  constructor(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
  }

  //funcao para dar start, ele engloba 2 coisas. 1 os dados dos personagens e a acao nos botoes
  start() {
    this.update();
    this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
  }

  update() {
    // Fighter 1 - colocando o nome
    this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

    // Fighter 2
    this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
  }
  doAttack(attacking, attacked) {
    console.log(`${attacking.name} está atacando ${attacked.name}`);
    // Implemente a lógica de ataque aqui
    // Por exemplo: subtrair o dano do atacante da vida do atacado
    // e depois chamar this.update() para atualizar a interface.
    attacked.life -= attacking.attack;
    this.update();
  }
}

let char = new Knight('Celin');
let monster = new LitterMonster();
const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
);

stage.start();

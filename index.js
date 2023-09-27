class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
  
    constructor(name) {
      this.name = name
    }
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
  
  //quando iniciar um cenario ele carrega as 4 informacoes
  class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
      this.fighter1 = fighter1;
      this.fighter2 = fighter2;
      this.fighter1El = fighter1El;
      this.fighter2El = fighter2El;
      this.log -= logObject;
    }
  
    start() {
      this.update();
    }
  
    update() {
      // Fighter 1 - colocando o nome
         // Fighter 2 - corrigindo o seletor
         this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
         let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
         this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

         this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
         let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
         this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }
  
    doAttack(attacking, attacked) {
        if (attacking.life <=0 || attacked.life  <=0){
        this.log.addMessage('ATACANDO');
        return;
        }

        let attackFator = (Math.random() * 2).toFixed(2);
        let defensefactor = (Math.random() * 2).toFixed(2);
        
        let actualAttack = attacking.attack * attackFator;
        let actualDefense = attacked.defense * defensefactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)}danos ... em ${attacked.name}`)
        }else{
            this.log.addMessageg(`${attacked.name} consegui defender ...`)
        }
        this.update();
    }
  }

  class log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }
    addMessage(msg){
        this.list.push(msg);
        this.render();
  }
    render(){
        this.listEl.innerHTML = '';
        
        for(let i in this.lis){
            this.listEl.innerHTML += `<li>${this.list[1]}</li>`
        }
    }
}
let char = new Knight('Celin');
  let monster = new LitterMonster();
  const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
  );
  
  stage.start();

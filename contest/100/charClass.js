class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    this.mana -= 10
    console.log("Fireball");
    console.log("mana: "+ this.mana);
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//result
// 545 210 10
// Fireball

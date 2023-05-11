const heroes = [
  "Bowerman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

export class Character {
  constructor(name, type, health, level) {
    this.health = 70;
    this.level = 1;
    if (!(name.length >= 2 && name.length <= 10 && typeof name == "string")) {
      throw new Error("min - 2 символа, max - 10");
    } else {
      this.name = name;
    }

    if (heroes.includes(type)) {
      return (this.type = type);
    } else {
      throw new Error("Герой не обнаружен");
    }
  }
  levelUp() {
    if (this.health == 0) {
      throw new Error("Нельзя повысить левел умершего,ты мерт нига");
    } else {
      this.level++;
      this.health = 100;
      this.attack = (this.attack * 20) / 100 + this.attack;
      this.defence = (this.defence * 20) / 100 + this.defence;
    }
  }
  damage(points) {
    points = this.attack;
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

export const bowerman = new Bowerman("Bowerman", "Bowerman");
const swordsman = new Swordsman("Swordsman", "Swordsman");
const magician = new Magician("Magician", "Magician");
const daemon = new Daemon("Daemon", "Daemon");
const undead = new Undead("Undead", "Undead");

class Fighter {
    constructor(name, damage, strength, agility, health) {
        this._name = name;
        this._damage = damage;
        this._strength = strength;
        this._agility = agility;
        this._health = health;
        this._healthRange = health;
    }
    get getName(){
        return this._name;
    }
    get getDamage(){
        return this._damage;
    }
    get getStrength(){
        return this._strength;
    }
    get getAgility(){
        return this._agility;
    }
    get getHealth(){
        return this._health;
    }
    attack(target){
        let oneHundred = 100;
            let variety = Math.random()*oneHundred;
            let defence = target.getDamage+target.getAgility;
            if(defence>=variety){
                console.log(this.getName + ' attack missed');
                console.log(`${target.getName} health = ${target.getHealth}`);
            } else {
                target.dealDamage(this.getDamage);
                console.log(`${this.getName} makes ${this.getDamage} damage to ${target.getName}`);
                console.log(`${target.getName} health = ${target.getHealth}`);
            }
    }
    logCombatHistory(){
        cl(`${this.getName} wins - ${this._isWin}, Loses - ${this._isLose}`);
    }
    heal(healRange){
        if(this._health+healRange >= this._healthRange){
            this._health = this._healthRange;
            cl('Unit have full level of health  ' + this._health);
        } else {
            this._health +=healRange;
            cl(`Unit heal by ${healRange} points and his health is ${this._health}`);
        }
    }
    dealDamage(diedRange){
        if(this._health>0){
            this._health-diedRange<0 ? this._health = 0 : this._health-=diedRange;
        }
    }
    addWin(el){
        el? this._isWin += el : this._isWin++;
        // cl(this.#name + ' wins = '  + this.#isWin);
    }
    addLose(loseNum){
        loseNum ? this._isLose += loseNum : this._isLose++;
    }
}
// const first = new Fighter('Petya', 20, 20, 15, 100);
// const second = new Fighter('Kostya', 25, 25, 20, 90);
function battle(fighter1, fighter2){
    if(fighter1.getHealth>0 && fighter2.getHealth>0){
        while (fighter1.getHealth>0 && fighter2.getHealth>0){
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if (fighter1.getHealth>0){
            fighter1.addWin();
            cl(`${fighter1.getName} has won!`);
            fighter2.addLose();
        } else {
            fighter1.addLose();
            fighter2.addWin();
            cl(`${fighter2.getName} has won!`);
        }
    } else {
        fighter1.getHealth === 0 ?
            cl(fighter1.getName + ' is dead and can not fight!') :
            cl(fighter2.getName +' is dead and can not fight');
    }
}
function cl(str){
    console.log(str);
}

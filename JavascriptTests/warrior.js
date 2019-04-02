
class Warrior{
    constructor(){
        this.name = "Dummy"
        this.hp = 100;
        this.mp = 50;
        this.strength = 10;
    }

    getName(){
        return this.name;
    }
    
    getHp(){
        return this.hp;
    }
    
    getMp(){
        return this.mp;
    }

    getStrength(){
        return this.strength;
    }

    setName(new_name){
        this.name = new_name;
    }

    setHp(new_hp){
        this.hp = hp;
    }

    setMp(new_mp){
        this.mp = mp;
    }

    setStrength(new_strength){
        this.strength = strength;
    }

    fightAgainst(other_warrior){
        document.write("THE FIGHT BETWEEN " + this.name + " AND " + other_warrior.name + "BEGINS!!1!");
        if(this.hp > 0 && other_warrior.hp > 0){
        }
    }
}
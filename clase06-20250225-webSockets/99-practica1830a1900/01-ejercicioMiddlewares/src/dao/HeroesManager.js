const { heroes } = require("../data/heroes.js");

class HeroesManager{
    static async getHeroes(){
        return heroes
    }
}

module.exports={HeroesManager}
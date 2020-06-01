function createCharacter(name, nickname, race, origin, attack, defense){
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe : function() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight : function(character){
            console.log(`Your opponent takes ${Math.max(0,this.attack - character.defense)} damage and you receive ${Math.max(0,character.attack - this.defense)} damage.`);
        }
    }
}

let characters = [
    {
        name : 'Gandalf the White',
        nickname : 'gandalf',
        race : 'Wizard',
        origin : 'Middle Earth',
        attack : 10,
        defense : 6
    },
    {
        name : 'Bilbo Baggins',
        nickname : 'bilbo',
        race : 'hobbit',
        origin : 'The Shire',
        attack : 2,
        defense : 1
    },
    {
        name : 'Frodo Baggins',
        nickname : 'frodo',
        race : 'hobbit',
        origin : 'The Shire',
        attack : 3,
        defense : 2
    },
    {
        name : 'Aragorn son of Arathorn',
        nickname : 'aragorn',
        race : 'Man',
        origin : 'Dunnedain',
        attack : 6,
        defense : 8
    },
    {
        name : 'Legolas',
        nickname : 'legolas',
        race : 'Elf',
        origin : 'Woodland Realm',
        attack : 8,
        defense : 5
    }
]

// Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------

//Arwen Undomiel is a Half-Elf of Rivendell

characters.push(
    {
        name : 'Arwen Undomiel',
        nickname : 'arwen',
        race : 'Half-Elf',
        origin : 'Rivendell',
        attack : 4,
        defense : 4
    }
);

characters.forEach(character => createCharacter(character));
// console.log(characters);

characters.find(character => character.nickname == 'aragorn').describe();
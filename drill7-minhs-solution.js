<<<<<<< HEAD
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
=======
/* eslint-disable no-console */
/* eslint-disable strict */
//7. Factory Functions with LOTR
//Factory Functions with LOTR
function createCharacter(name, nickname, race, origin, attack, defense, weapon ){
  return{
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      return `${name} is a ${race} from ${origin} who uses ${weapon}.`},
  
    evaluateFight: function(char){
      return `Your opponent takes ${attack} damage and you receive ${char.attack} damage.`
    }
  }
}
  
//Test
let users = [
  createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins','bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins','gandalf', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man' ,'Dunnedain', 6, 8, 'a Anduril'),
  createCharacter('Legolas ', 'legolas ', 'Elf' ,'Woodland Realm', 8, 5, 'a Bow and Arrow'),
  createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 5,7, 'a Hadhafang')
];
  
  
console.log('Find Aragorn')
function checkAragorn(user){
  return user.nickname === 'aragorn';
}
console.log(users.find(checkAragorn))
  
function checkHobbit(user){
  return user.race === 'Hobbit';
}
  
let hobbits = users.filter(checkHobbit);
console.log(hobbits);
  
  
function checkAttackValue(user){
  return user.attack >= 5;
}
  
let highAttackUsers = users.filter(checkAttackValue);
console.log(highAttackUsers);
  
console.log(users[1]['describe']());
>>>>>>> 0461506bb3d58428f82cee496ca6b046536b7a09

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

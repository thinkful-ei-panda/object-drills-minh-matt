/* eslint-disable strict */
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query){
    for(let i in Database.store.heroes){
      if(query.id === Database.store.heroes[i].id) {
        console.log(Database.store.heroes[i])
      }
    }
  }
};
  
// console.log(Database.store.heroes )
Database.findOne({ id: 2 });
  
// for(let i in Database.store.heroes){
//   console.log(Database.store.heroes[i].id)
// }
  
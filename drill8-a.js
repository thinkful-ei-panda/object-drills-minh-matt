/* eslint-disable no-console */
/* eslint-disable strict */
//8. BONUS: A Database Search

//BONUS: A Database Search
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
  
  
function findOne(arr, query){
  for(let i in arr) { 
    // console.log(arr[i]['id']); 
    if(arr[i]['id'] === query['id']){
      //  console.log(arr[i]);
      return arr[i];
    }else{ return null;}
  }
}
// HEROES.find(element => console.log(element.id === 1));
  
findOne(HEROES, {id: 1});
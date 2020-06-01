/* eslint-disable strict */
//6. Cracking the code
//Cracking the code with is (old)
function decode(obj){ 
  let decodedObjectArr = [];    
  for(let i in obj){
    // console.log(i)
    switch(obj[i]){
    case (1):
      // console.log(Object[i][1]);
      decodedObjectArr.push(i[3])
      break;
    case 2:
      // console.log(Object[i][2]);
      decodedObjectArr.push(i[2])
      break;
    case 3:
      // console.log(Object[i][3]);
      decodedObjectArr.push(i[1])
      break;
    case 4:
      // console.log(Object[i][4]);
      decodedObjectArr.push(i[4])
      break;
    default:
      decodedObjectArr.push(' ')
    }
    console.log(decodedObjectArr)
  }
  let decodedObject = decodedObjectArr.join('')
  return console.log(`This coded Object translates to: (${decodedObject}) `)
  // return decodedObject;
}
  
  
//test    
let cipher = {
  craft: 1,
  block: 2,
  argon: 3,
  meter: 5,
  bells: 2,
  brown: 2,
  croon: 1,
  droop: 4
}
      
console.log(decode(cipher));
// console.log(cipher);
  
/* eslint-disable strict */
// 4. Arrays of objects
let users = [
  {
    name: 'Bruce Banner',
    jobTitle: 'Logistics Manager',
    boss: 'Tony Stark'
  },
  {
    name: 'Tony Stark',
    jobTitle: 'Chief Executive Officer'
  },
  {
    name: 'Peter Parker',
    jobTitle: 'Intern',
    boss: 'Tony Stark'
  }
];
        
for(let i of users){
  // console.log(i);
  // console.log(typeof i.boss)
  console.log(`${i.name}, ${i.jobTitle}`);
        
  if(typeof i.boss === "string"){
    console.log(`${i.jobTitle} ${i.name} reports to ${i.boss}.`);
  } else {
    console.log(`${i.jobTitle} ${i.name} doesn't report to anybody.`);
  }
}
<<<<<<< HEAD
// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format:
//  "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display
//  "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

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

for(let user of users){
    if(user.boss){
        console.log(`${user.jobTitle} ${user.name} reports to ${user.boss}.`);
    }
    else{
        console.log(`${user.jobTitle} ${user.name} doesn't report to anybody.`)
    }
};
=======
/* eslint-disable strict */
// 5. Properties that aren't there
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
>>>>>>> 0461506bb3d58428f82cee496ca6b046536b7a09
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, 
// or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

// let obj1 = {name: "Minh", jobTitle: "developer"}, 
//     obj2 = {name: "Andrea", jobTitle: "teacher"}, 
//     obj3 = {name: "Matt", jobTitle: "developer"};

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
    console.log(`${user.name}: ${user.jobTitle}`);
};
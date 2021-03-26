const os = require('os');
const fs = require('fs');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());

const genders = ['M', 'F'];
const maleNames = ['John', 'Alan', 'Ed', 'Rob', 'Greg', 'Daniel'];
const femaleNames = ['Ann', 'Grace', 'Bella', 'Mary', 'Margaret', 'Greta'];
const lastNames = ['Mcduck', 'Kinsky', 'Tucker', 'Whitehill', 'Boom', 'Williams', 'McDowel', 'Sarandon'];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i = 1; i <= 20; i++) {
  let person = {};

  person.gender = randChoice(genders);

  if (person.gender === 'M' ){
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }
  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * (54 - 21 + 1)) + 21;

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

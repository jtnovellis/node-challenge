const fakerjs = require('@faker-js/faker');
const faker = fakerjs.faker;
const fs = require('fs');

function createNames() {
  const person = faker.name.fullName();
  return person;
};
for (let i = 1; i <= 1000; i++) {
  fs.appendFileSync('names.txt', createNames(), (err) => {
    if (err) {
      throw err;
    };
  });
  console.log(`Name added to file names.txt, No. of names: ${i}`);
};
console.log('The proccess has been completed satisfactorily');
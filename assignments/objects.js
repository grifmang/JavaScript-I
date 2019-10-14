// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:

const intern1 = {
  email: 'mmelloy@psu.edu',
  name: 'Mitzi',
  gender: 'F',
  id: 1,
}

const intern2 = {
  email: 'kdiben1@tinypic.com',
  name: 'Kennan',
  gender: 'M',
  id: 2,
  speak: function() {
    return 'Hello, my name is Kennan!';
  }
}

const intern3 = {
  email: 'kmummery2@wikimedia.org',
  name: 'Keven',
  gender: 'M',
  id: 3,
}

const intern4 = {
  email: 'gmartinson3@illinois.edu',
  name: 'Gannie',
  gender: 'M',
  id: 4,
}

const intern5 = {
  email: 'adaine5@samsung.com',
  name: 'Antionetta',
  gender: 'F',
  id: 5,
  multiplyNums: function(num1, num2) {
    return num1 * num2;
  }
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(intern1.name);

// Kennan's ID
console.log(intern2.id);

// Keven's email
console.log(intern3.email);

// Gannie's name
console.log(intern4.name);

// Antonietta's Gender
console.log(intern5.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(intern2.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(intern5.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
let parent = {
  name: 'Susan', 
  age: 70,
  speak: function() {
    console.log('Hello, my name is ' + this.name + '.');
  }
};

// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
parent['child'] = {name: 'George', age: 50, speak: function() {console.log('Hello, my name is ' + this.name + '.')}};

// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
parent.child['grandchild'] = {name: 'Sam', age: 30, speak: function() {console.log('Hello, my name is ' + this.name + '.')}};

// 4. Give each of the objects the ability to speak their names using the this keyword.

// Log the parent object's name
console.log('Parent name: ' + parent.name);

// Log the child's age
console.log('Child\'s age: ' + parent['child'].age);

// Log the name and age of the grandchild
console.log('Grandchild Name: ' + parent.child['grandchild'].name + '\n' +
            'Grandchild Age: ' + parent.child['grandchild'].age + '.')

// Have the parent speak
parent.speak();

// Have the child speak
parent['child'].speak();

// Have the grandchild speak
parent.child['grandchild'].speak();
// Let's create a basic person object with my info
let person = {
    firstname: "Nicole",
    lastname: "Carman",
    nickname: "Cat Lady",
    age: 32,
    favorites: {
        movies: ["Erin Brockovich", "Morbius", "Harry Potter and the Deathly Hallows"],
        music: ["Rock", "Metal", "80s"]
    },
    greeting: () => {
        console.log("Hello world!");
    }
}


// Let's practice accessing key/value pairs within our new object
// We can use dot or bracket notation
console.log(person.firstname);
console.log(person["firstname"]);


// How do we access the movie "Morbius" in my person object?
console.log(person.favorites.movies[1])


// How do we use the greeting function?
person.greeting();


// Let's practice some destructuring
let {nickname} = person;
console.log(nickname);

let {greeting} = person;
greeting();


// Destructures and changes "age" to "yearsOfWisdom" in same line
let {firstname, lastname, age: yearsOfWisdom} = person;


// Review of looping objects using for...in loops
// If you're in a for...in loop, use bracket notation without quotes (instead of dot notation)
// Example: ${person[property]}
for (const property in person) {
    console.log(`The property of ${property} has a value of: ${person[property]}`);
}


// Adding and deleting properties
// With adding: if JavaScript finds the attribute (job), it will reassign it to the new value. If it doesn't, it will add it.
person.job = "Student";

// Checks to make sure it added it at the bottom
console.log(person);

delete person.job;
console.log(person);



// CLASSES
class Cat {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true;
    }

    greeting() {
        console.log(`Meow! My name is ${this.name} and I am ${this.age} years old. My breed is ${this.breed}.`)
    }
}



// Make a new cat
// No need to add an argument for this.isCute because it's auto set to true
const dexter = new Cat("Dexter", "ASH", 6);
console.log(dexter);


// Run the Cat method greeting()
dexter.greeting();


// Let's expand our class!
class Kitten extends Cat {
    constructor(name, breed, age, isTeething) {
        super(name, breed, age);

        this.isTeething = isTeething;
    }
}


// Make a new kitten
const kittenName = new Kitten("kittenName", "Siamese", 1, true);
console.log(kittenName);
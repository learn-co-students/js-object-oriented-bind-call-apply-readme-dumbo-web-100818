// use this to copy code snippets or us your browser's console

class Event {
  constructor(title, keywords){
    this.title = title
    this.keywords = keywords
  }
}

class User {
  constructor(name, interests){
    this.name = name
    this.interests = interests
  }
  matchInterests(event){
    return event.keywords.some(word => {
      return this.interests.includes(word)});
  }
}

let billy = new User ('Billy', ['music', 'art', 'movies']);
let freeMusic = new Event ('Free Music Show,', ['music', 'free', 'outside']);

console.log(billy.matchInterests(freeMusic))













// function greet(one, two) {
//     console.log(`Hello, ${one} and ${two}, my name is ${this.name}, hi!`);
// }
//
// greet(); // my name is , hi!
//
// let person = {
//     name: 'Bob',
//     greet: greet
// };
//
// greet.apply(person, ['Mendy', 'Yossi']); // my name is Bob, hi!
// greet.call(person, 'Mendy', 'Yossi'); // same result

// let sally = {name: 'Sally'}
//
// function greeting(customer){
//   console.log(`Hi ${customer}, my name is ${this.name}`);
// }
//
// greeting.bind(sally)('Shmuly')
//greeting('Sam')

// let newGreeting = greeting.bind(sally)
//
// newGreeting('Shmuly')
// greeting('Sam')

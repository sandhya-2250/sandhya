//worksheet7.js objects
let person = {
    name: "Sandhya",
    cast: "Shrestha",
    age: 18,
    city: "Arghakhanchi"
};
console.log(person);

console.log(person.name);
console.log(person.cast);
console.log(person.age);

person.city = "Kathmandu";
console.log(person);

//output:
// { name: 'Sandhya', cast: 'Shrestha', age: 18, city: 'Arghakhanchi' }
// Sandhya
// Shrestha
// 18
// { name: 'Sandhya', cast: 'Shrestha', age: 18, city: 'Kathmandu' }

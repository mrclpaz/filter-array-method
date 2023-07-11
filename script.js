const people = [
    {
        name: 'Marcela',
        age: 33
    },
    {
        name: 'Bernardo',
        age: 5
    },
    {
        name: 'Melissa',
        age: 43
    }
];

// Adults Filter

const adults = people.filter(person => person.age >= 18);

console.log(adults);

// Kids Filter

const kids = people.filter(person => person.age <= 18);

console.log(kids);
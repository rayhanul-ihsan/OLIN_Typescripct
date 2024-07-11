// 2. **Interfaces**

interface Person {
    name: string;
    age: number;
  }
  
  function greet(person: Person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
  }
  
  const person: Person = {
    name: "ripal",
    age: 26
  };
  
  console.log(greet(person))
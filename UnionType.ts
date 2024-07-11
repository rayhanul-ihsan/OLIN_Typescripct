// 4. **Union Types**

type Input = string | number;

function toString(input: Input): string {
  return input.toString();
}

const Name : Input = "dimas";
const Age: Input = 46;

console.log(toString(Name)); 

console.log(toString(Age)); 

// 3. **Generics**
function identity<T>(arg: T): T {
    return arg;
  }
  
  const stringIdentity = identity<string>("Hello, I am!");
  console.log(stringIdentity); 
  
  const numberIdentity = identity<any>(42);
  console.log(numberIdentity); 
  const personIdentity = identity<any>({ name: "ripal", age: 26 });
  console.log(personIdentity); 
  
<!-- Blog 1 -->

\*\*\* TypeScript: `type` vs `interface` — When to Use Which?

In TypeScript, both `type` and `interface` are used to define the shape of objects or data structures. While they are quite similar, they have some key differences and specific use cases.

---

## 🔹 When to Use `type`

`type` is more flexible and can be used for:

- **Primitive types** (`string`, `number`)
- **Union types** (`A | B`)
- **Intersection types** (`A & B`)
- **Object types**
- **Tuples**
- **Function types**

> ✅ Use `type` when you're working with complex type definitions or combining multiple types.

### Example:

```ts
// Object Type
type TUser = {
  name: string;
  age: number;
  email: string;
};

// Intersection Type
type TAddress = {
  address: string;
};

type UserWithAddress = TUser & TAddress;

// Union Type
type TStatus = "Success" | "Pending" | "Reject";



### Interface

// Basic Interface
interface IProduct {
  name: string;
}

// Declaration Merging
interface IProduct {
  price: number;
}

// Final IProduct structure:
// { name: string; price: number }

const product: IProduct = {
  name: "T-shirt",
  price: 500,
};


// class with interface

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log("Meaw");
  }
}



 # Key Differences Between Type and Interface

Feature                                type                     interface

can define object                      Yes                        Yes
can define primitive                   Yes                         No
can define union and intersection      Yes                         No
declaration merging                            No                          Yes
can define function                    Yes                         Yes
use with class                         No                          Yes
flexibility                            More Flexible               Less Flexible
```

<!-- Blog 2 -->

# What is the use of the keyof keyword in TypeScript? Provide an example ----

# What is keyof

The keyof keyword is a TypeScript type operator that returns a union of string literal types representing all the keys of a given object type

# Why Use keyof

- extract keys from object type
- To constrain function arguments to only valid object keys
- Commonly used in combination with generics and mapped types

# Example

<!-- basic  -->

type TPerson = {
name: string;
age: number;
email: string;
};

type TPersonKeys = keyof TPerson;
// Result: "name" | "age" | "email"

<!-- keyof with generic  -->

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

const person:TPerson = {
name: "shorif",
age: 22,
email: "shorif@gmail.com",
};

const name = getValue(person, "name"); // Output: "shorif"
// const name = getValue(person, "address"); Error: Argument of type '"address"' is not assignable

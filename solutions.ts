function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

formatString("Hello", true);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items?.filter((item) => item?.rating >= 4);
  return result;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    (this.make = make), (this.year = year);
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

processValue(10);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products?.length === 0) {
    return null;
  }
  const result = products?.reduce((item, product) =>
    product.price > item.price ? product : item
  );
  return result;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday"; // 2 weekend days
  //   return day === Day.Sunday ? "Weekend" : "Weekday"; // 1 weekend day
}

getDayType(Day.Saturday);
getDayType(Day.Monday);

async function squareAsync(n: number): Promise<number> {
  return await new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject("Error: Negative number not allowed");
    }
  });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);

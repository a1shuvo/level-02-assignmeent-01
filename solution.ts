// Problem: 1
type MultiType = string | number | boolean;
function formatValue(input: MultiType): MultiType {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
}

// Problem: 2
function getLength(input: string | (string | number)[]): number {
  if (typeof input === "string") {
    return input.length;
  }
  return input.length;
}

// Problem: 3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Problem: 4
type Item = {
  title: string;
  rating: number;
};

function filterByRating(books: Item[]): Item[] {
  return books.filter((book) => book.rating >= 4);
}

// Problem: 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

// Problem: 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(input: Book): void {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
}

// Problem: 7
type StringOrNumber = string | number;
function getUniqueValues(
  array1: StringOrNumber[],
  array2: StringOrNumber[]
): StringOrNumber[] {
  const uniqueArr: StringOrNumber[] = [];

  function isPresent(array: StringOrNumber[], value: StringOrNumber): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!isPresent(uniqueArr, array1[i])) {
      uniqueArr.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!isPresent(uniqueArr, array2[i])) {
      uniqueArr.push(array2[i]);
    }
  }

  return uniqueArr;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


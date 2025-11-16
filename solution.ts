// Problem: 1
function formatValue(input: string | number | boolean) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  } else {
    return;
  }
}

// Problem: 2
function getLength(input: string | (string | number)[]) {
  if (typeof input === "string" || Array.isArray(input)) {
    return input.length;
  } else {
    return;
  }
}

// Problem: 3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
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

function printBookDetails(input: Book) {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
}



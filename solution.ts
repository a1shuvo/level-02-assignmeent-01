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
function getLength(input: string | string[] | number[]) {
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



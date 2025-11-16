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


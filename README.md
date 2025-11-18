# TypeScript এ Types এবং Interfaces এর মধ্যে পার্থক্য

TypeScript আমাদের JavaScript কোডকে আরও নিরাপদ এবং সুসংগঠিত করতে শক্তিশালী টাইপিং সিস্টেম প্রদান করে। এর দুটি জনপ্রিয় ফিচার হলো interface ও type। TypeScript শেখার সময় নতুনদের মধ্যে সবচেয়ে কমন প্রশ্ন হলো - **interface নাকি type ব্যবহার করব?** দুইটিই object বা structure define করতে ব্যবহার হয়, কিন্তু কাজের ধরন, ক্ষমতা এবং ব্যবহারিক পার্থক্য আছে। এখানে কিছু উদাহরণসহ বুঝবো কখন কোনটি ব্যবহার করা উচিত।

## Interface এবং Type এর মৌলিক ধারণা

### Interface উদাহরণ

```ts
interface Person {
  name: string;
  age: number;
}
```

### Type উদাহরণ

```ts
type PersonType = {
  name: string;
  age: number;
};
```

**interface এবং type** এর গঠন দেখতে প্রায় একই রকম মনে হতে পারে, কিন্তু তাদের ব্যবহারিক ক্ষমতা আলাদা।

## প্রধান পার্থক্যগুলো

### ১। Interface "মার্জ" (Declaration Merge) করা যায়, Type নয়

Interface হলো "open", কিন্তু Type হলো "closed"। একই নাম দিয়ে Interface বারবার ডিফাইন করলে TypeScript সেগুলোকে একত্রে merge করে। Interface পরে বাড়ানো যায়, Type-এ একই নাম ব্যবহার করলে error হবে।

```ts
interface Product {
  title: string;
}

interface Product {
  price: number;
}

const item: Product = {
  title: "Book",
  price: 200,
};
```

Type-এ একই নাম ব্যবহার করলে error:

```ts
type Vehicle = {
  brand: string;
};

type Vehicle = {
  // ❌ Duplicate identifier
  model: string;
};
```

### ২। Type বেশি ফ্লেক্সিবল, Interface বেশি structured

Type alias দিয়ে union, intersection, tuple ইত্যাদি represent করা যায়।
এগুলো interface দিয়ে করা সম্ভব নয়।

```ts
// Union type
type Status = "success" | "error" | "pending";

// Primitive alias
type ID = string | number | boolean;

// Intersection type
type A = { x: number };
type B = { y: number };
type C = A & B; // { x: number; y: number }

// Tuple
type Point = [number, number];

// Function type
type Logger = (message: string) => void;
```

Interface এগুলো করতে পারে না। Interface কেবল object-like structure ডিফাইন করার জন্য উপযুক্ত।

### ৩। Extending এর ক্ষেত্রে syntax-এ পার্থক্য

```ts
// Interface extends
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark(): void;
}
```

Type alias এর ক্ষেত্রে intersection (&) ব্যবহার করতে হয়।

```ts
// Type intersection
type AnimalType = { name: string };
type DogType = AnimalType & { bark(): void };
```

## ৪। Interface ক্লাসের সাথে খুব ভালোভাবে কাজ করে

যদি কোনো ক্লাসকে একটি নির্দিষ্ট structure follow করতে বাধ্য করতে হয়, interface ব্যবহার করাই সবচেয়ে ভালো।

```ts
interface Animal {
  sound(): void;
}

class Dog implements Animal {
  sound() {
    console.log("Bark");
  }
}
```

Type alias দিয়েও করা যায়, তবে interface এই জায়গায় বেশি সুবিধাজনক এবং readable।

## ৫। Objects সংজ্ঞায়িত করার ক্ষেত্রে দুটোই প্রায় interchangeable

যদি শুধু একটি object structure তৈরি করতে হয়, তবে interface এবং type দুটোই সমানভাবে কাজ করবে।

```ts
interface Product {
  name: string;
  price: number;
}

type Product = {
  name: string;
  price: number;
};
```

তবে বড় প্রজেক্টে team convention সাধারণত interface ব্যবহারের দিকেই ঝোঁকে।

## ব্যবহারিক নির্দেশিকা

Interface ব্যবহার করা হয় অবজেক্ট স্ট্রাকচারের জন্য, Type ব্যবহার করা হয় কমপ্লেক্স টাইপ হ্যান্ডেল করার জন্য।

### Interface ব্যবহার করা হয় যখন:

- Object shape বা class contract define করতে হবে
- ভবিষ্যতে extension দরকার হতে পারে
- API বা library design এর ক্ষেত্রে

### Type ব্যবহার করা হয় যখন:

- Union, intersection বা Function type define করতে হবে
- Advanced mapped বা conditional type দরকার
- Tuple, array বা utility type define করতে হবে

## উপসংহার

TypeScript এ object বা structure define করতে Interface আর Type উভয়ই খুব শক্তিশালী। যেটি কোডকে পরিষ্কার, সহজবোধ্য এবং maintainable রাখে সেটিই প্রয়োজন অনুসারে ব্যবহার করা উচিত।

<center>
<br>
<br>
<br>
******
<br>
<br>
<br>
</center>

# TypeScript এ keyof কীওয়ার্ডের ব্যবহার - সহজ ভাষায় ব্যাখ্যা ও উদাহরণ

TypeScript-এ কাজ করতে গেলে আমরা সাধারণত অবজেক্ট, ইন্টারফেস বা টাইপ নিয়ে অনেক কাজ করি। কখনো কখনো এমন পরিস্থিতি আসে যেখানে আমরা কোনো অবজেক্টের keys নিয়ে কাজ করতে চাই, সেটাকে টাইপ হিসেবেও ব্যবহার করতে চাই। ঠিক এখানেই **keyof** কীওয়ার্ড আমাদের অসাধারণ ক্ষমতা দেয়।

এই পোস্টে আমরা দেখবো ঃ

- keyof কী?
- এটা কেন দরকার?
- বাস্তব উদাহরণসহ সহজ ব্যাখ্যা

## keyof কী?

সহজ কথায় বললে -
keyof কোনো অবজেক্ট টাইপের **সব কীগুলোর ইউনিয়ন টাইপ** তৈরি করে।

অর্থাৎ যদি একটি অবজেক্টে name, age, email নামে তিনটি key থাকে, তাহলে keyof করলে পাবো 'name' | 'age' | 'email'।

এটি মূলত অনাকাঙ্ক্ষিত key ব্যবহারের ভুল কমিয়ে কোডকে আরও নিরাপদ (type-safe) করে।

## কেন keyof দরকার?

TypeScript এ অনেক সময় এমন ফাংশন বানাতে হয়, যেটা অবজেক্ট থেকে কোনো নির্দিষ্ট প্রপার্টি বের করবে। কিন্তু সেটা যেন ভুল নাম না নেয়, এই নিশ্চয়তা দিতে keyof হচ্ছে সেরা উপায়।

- ভুল key ব্যবহার করা থেকে বাঁচাতে
- ফাংশনের ইনপুটকে নির্দিষ্ট key এর মধ্যে সীমাবদ্ধ রাখতে
- জেনেরিক টাইপ (Generics) আরও শক্তিশালী করতে
- ডায়নামিক key ভিত্তিক কোড লেখা সহজ করতে

## উদাহরণ

ধরুন আপনার কাছে একটি User টাইপ আছেঃ

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};
```

এবার আপনি চান একটি ফাংশন তৈরি করতে, যা User অবজেক্ট থেকে শুধুমাত্র একটি বৈধ key গ্রহণ করবে, যেমনঃ name, বা age, বা isActive। কিন্তু অন্য কিছু হলে যেন TypeScript এরর দেখায়।

এখন দেখি **keyof** কীভাবে সাহায্য করে:

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

// keyof ব্যবহার করলে আমরা এই টাইপ পাব:
// "name" | "age" | "isActive"

function getUserValue(user: User, key: keyof User) {
  return user[key];
}

const person: User = {
  name: "Shuvo",
  age: 25,
  isActive: true,
};

// সঠিক key - valid
console.log(getUserValue(person, "name"));

// ❌ ভুল key - Invalid (TypeScript error)
// console.log(getUserValue(person, "email"));
```

## ব্যাখ্যা

keyof User আমাদের দিচ্ছে একটি ইউনিয়ন টাইপ: "name" | "age" | "isActive"
ফলে **getUserValue()** ফাংশনে key প্যারামিটার হিসেবে কেউ "email" বা "address" দিলে TypeScript আগে থেকেই ভুল দেখাবে।

এভাবে কোড আরও নিরাপদ হয়।

## উপসংহার

**keyof** TypeScript এর খুব শক্তিশালী কিন্তু সহজ একটি কীওয়ার্ড। এটি অবজেক্টের key গুলোকে ইউনিয়ন টাইপে রূপান্তর করে, ফলে কোড আরও সুরক্ষিত, পড়তে সহজ এবং বাগ-মুক্ত হয়। এছাড়া ডায়নামিক অবজেক্ট অ্যাক্সেস, Generic ফাংশন বা ইউটিলিটি তৈরি করতে যখনই অবজেক্টের কীগুলো নিয়ে নিরাপদভাবে কাজ করতে হয়, **keyof** দারুণভাবে কাজ করে।

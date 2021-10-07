// for objects, we can define the types by adding an object with
// the types we want.

const user: { name: string; age: number } = {
  name: "Kevin",
  age: 19,
};

// but this is not a good practice, because we'd copy and paste
// that object
//
// So, we can use an interface instead

interface UserInterface {
  name: string;
  age: number;
}

// now we can get the same result:
const user2: UserInterface = {
  name: "Laura",
  age: 20,
};

// we can define optional properties using the '?' operator
interface UserInterface2 {
  name: string;
  age: number;
  isMarried?: boolean;
}

// now we can or cannot pass that property
const user3: UserInterface2 = {
  name: "Luana",
  age: 17,
};

const user4: UserInterface2 = {
  name: "Karol",
  age: 17,
  isMarried: true,
};

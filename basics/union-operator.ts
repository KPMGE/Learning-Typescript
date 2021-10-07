// we can accept two or more types using the operator '|'.
// This feature is specially useful to check a null value,
// so, we can define that a variable is null by default and
// accept another type that way, we can check if some value was
// assigned for that variable

interface UserInterface {
  name: string;
  age: string;
}

// so here, a we accept 2 types, null, which is defined as a
// default value, or a user of type UserInterface
const userFeched: UserInterface | null = null;

// we can create our own types in typescript

type ID = string;
type UsersNames = string;

// so, now that types clarify the purpose of our code,
// so this is a great practice

interface UserInterface {
  id: ID;
  name: string;
  age: number;
}

const someUser: UserInterface = {
  id: "aoidfadnfjdjadjfaj",
  name: "Kevin",
  age: 19,
};

// so now we know that names is a variable that holds names of users
// and that variable is an array.
const names: UsersNames[] = ["Kevin", "Luana", "Laura", "Karol"];

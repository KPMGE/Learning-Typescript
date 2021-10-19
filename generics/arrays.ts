// when using generics, we could create arrays at least 2 ways.

interface EmployeeInterface {
  name: string;
  age: number;
  wage: number;
}

// imagine we need an array of users, we could do something like that:
const employees1: EmployeeInterface[] = [
  { name: "Kevin", age: 19, wage: 10000 },
];

// or, we can use the Array generic
const employees2: Array<EmployeeInterface> = [
  { name: "Kevin", age: 19, wage: 10000 },
];

// all above statemets are the same, but the first one will work
//only if all elements of the aray are the same, if it's not, we must
//use the Array generic
//
const employees3: Array<EmployeeInterface | null | number> = [null, 342];

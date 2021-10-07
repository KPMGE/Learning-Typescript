// the type unknown is a better choice than any.
// Because, we still can assign any value to unknown,
// but we can't assign a variable with type unknown to another
// variable with another type and, that's safer.

let anyVariable: any = 10;
let unknownVariable: unknown = 20;

// we can assign a any variable to another variable
const numberOfPeople = anyVariable;

// but we cannot do that with unknown without a type casting.
const numberOfColors = unknownVariable;

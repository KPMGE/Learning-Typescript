// typescript can infer type
const helloMessage = "Hello!";
// we really can't do that in ts.
helloMessage = "Hey";

// we can define variable types explicitly
// This is recommended!
let nameUser: string = "Kevin";

// we can't assign other types to that variable!
nameUser = 32;

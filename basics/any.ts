// the any type should be avoided at all costs.
// Basically, any disable the typechecker of tsserver.
// which is a source of problems

const hello: any = "Hello";

// we don't get erros, because the type of hello is any
console.log(hello.foo());

const hello2: string = "Hello 2";

// now we get an error, because the typechecker successfully checked
// our code.
console.log(hello2.foo());

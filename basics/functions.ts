// we can define the return of a function,
// that is a good practice
function createHelloMessage(nameUser: string): string {
  return `$Hello ${nameUser}!`;
}

console.log(createHelloMessage("kevin"));

// never applies to functions, and it says that a function
// never hits the end. It's not so useful outside modules at all.

function generateError(): never {
  throw "Error";
}

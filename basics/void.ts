// the void type is only useful to functions,
// it says that a function return nothing.

function displayUserName(name: string): void {
  console.log(name);
}

// if we try to return something from this function, we get an error
function displayUserName2(name: string): void {
  console.log(name);

  // error
  return name;
}

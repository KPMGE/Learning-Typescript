//  when using a const enum, the enum won't be generated in JS
//  so, we'll end up with just a variable with its value, which is
//  more concise. But, when using an enum with nothing, we'll have its values
//  listed.

const enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "UP",
}

const dir = Directions.Up;

// we'll end up with: var dir = "UP"!

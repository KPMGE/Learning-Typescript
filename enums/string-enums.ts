// Enums can be used is a type, that's a excellent feature
// cuz sometimes, we need to be very restrict on the types that are
// assignable to a variable. So, a variable declared with enum type,
// can get only values from that enum.

enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "UP",
}

// imagine we have a game, and we need to ensure that only the
// aforementioned directions are accecptable. Using a primitive types
// we cannot do that, cuz with something like:

function movePlayer(where: string) {
  // move player here
}

// with that signature, we can invoke that function with any string,
// so the user can call that function with an invalid direction without
// any errors.

movePlayer("North"); // this is a invalid direction, but as 'North' is a string no errors here

// but, using the enum Directions as a type, we ensure that only its values are
// assignable to the varible.

function movePlayerWithEnum(where: Directions) {
  // move player here
}

// in that case, we cannot assign any value, only values that belong to the Directions enum

movePlayerWithEnum(Directions.Up); // this works just fine!
movePlayerWithEnum("North"); // this won't  compile, cuz we used a value outside the enum

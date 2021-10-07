// with the as operator, we can do a type assertion with typescript
// with that, we can convert from one type to another
// it is specially useful when using unknown.

const unknownVar: unknown = 10;

// we can't assign a variable unknown to a number variable
const v1: number = unknownVar;

// but after type assertion, we can.
const v2: number = unknownVar as number;

// when we want to convert from a specific type to another,
// we need to convert to unknown first, then convert to desired type

const cpf: string = "415414051";

// this don't work
const cpfNum: number = cpf as number;

// we need to do this instead
const cpfNum2: number = cpf as unknown as number;

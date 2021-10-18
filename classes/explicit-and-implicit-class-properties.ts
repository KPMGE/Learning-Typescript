// when using classes, we can use either an explicit declaration
// or a implicit one.

// an explicit declaration would be something like this:
class Person {
  public firstName: string;
  public lastName: string;
  public age: number;
  // this property is only accessible within this class
  private cpf: number;

  // here, the constructor has a tedious task of assigning each value
  // to each property...
  constructor(firstName: string, lastName: string, age: number, cpf: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }
}

const someone = new Person("Kevin", "Jesus", 19, 35131515);

// this works just fine, cuz firstName is a public property!
console.log(someone.firstName);
// this won't compile, cuz the property cpf is private, therefore just accessible inside
// the person class
console.log(someone.cpf);

// An implicit declaration is something like this
class Person2 {
  // here, we don't need to explicitly define that assignments,
  // when compiled, this task will be made for us!
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private cpf: number
  ) {}
}

const somebody = new Person2("Rafaela", "Almeida", 19, 342983492);

// this works just fine, cuz firstName is a public property!
console.log(somebody.firstName);
// this won't compile, cuz the property cpf is private, therefore just accessible inside
// the person class
console.log(somebody.cpf);

// with typescript, we can use clases. More than that,
// we can define properties like public, private and protected
// to mark a variable or function as private or protected. By default
// all elements in a class are public

// NOTE: It's important to know that this words just change
// the way we work in typescript, after transpile the code,
// there will be no private or protected types at all.

class User {
  private firstName: string;
  private secondName: string;

  constructor(firstName: string, secondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

const kevin = new User("Kevin", "Carvalho");
console.log(kevin.getFullName());

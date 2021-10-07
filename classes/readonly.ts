// we can mark a variable as unchangeable using readonly

class User {
  firstName: string;
  secondName: string;
  // we can't change this after assigned on constructor
  readonly id: string;

  constructor(firstName: string, secondName: string, id: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.id = id;
  }

  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

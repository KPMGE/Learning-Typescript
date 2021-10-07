// we can define an interface then say that a class must
// implement some method for example, to do that, we use the
// implements keyword

interface UserInterface {
  getFullName(): string;
}

// this class must implement the method called getFullName!
class User implements UserInterface {
  firstName: string;
  secondName: string;

  constructor(firstName: string, secondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  getFullName() {
    return this.firstName + " " + this.secondName;
  }
}

// sometimes, we want variables that are shared by all instances
// of a class. For that cases, we need static variables. Basically,
// we can manipulate that variables from whatever instances of a
// certain class.

// NOTE: Once a static variable don't belong to an instance but
// to a class we don't use the keyword 'this' here, we use the name of
// the class itself

class Store {
  // the type is infered as number!
  static totalPeople = 0;

  // function to increase the number of people inside store
  increasePeople() {
    Store.totalPeople++;
  }

  // function to decrease the number of people inside store
  decreasePeople() {
    if (Store.totalPeople > 0) {
      Store.totalPeople--;
    }
  }
}

// instance of the class store
const store1 = new Store();
// instance of the class store
const store2 = new Store();

store1.increasePeople();
store2.increasePeople();

// we can see that the static variable can be updated
// by all instances of the class Store. So, the variable
// totalPeople belogns to the class People itself not to
// its instances
console.log(Store.totalPeople);

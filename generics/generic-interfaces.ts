// we can create generic interfaces, that fit to a given type when referencing it

interface ComparatorInterface<T> {
  compare(value: T): number;
}

interface RectangleInterface {
  length: number;
  width: number;
  getArea(): number;
}

// now, we can use this interface passing the desired type
class Reactangle implements ComparatorInterface<RectangleInterface> {
  constructor(public length: number, public width: number) {}

  private calculateArea(length: number, width: number): number {
    return length * width;
  }

  public getArea(): number {
    return this.length * this.width;
  }

  public compare(value: RectangleInterface) {
    const { width, length } = value;

    if (this.calculateArea(length, width) === this.getArea()) {
      return 0;
    } else if (this.calculateArea(length, width) > this.getArea()) {
      return 1;
    } else {
      return -1;
    }
  }
}

// this looks weird, but now, we have safety. cuz now, we added a constraint
// to the types that are allowed for that class. For example:
interface CircleInterface {
  radius: number;
  getArea(): number;
}

class Circle implements CircleInterface {
  constructor(public radius: number) {}
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// So, now, we have no chance do make something like:

const rect = new Reactangle(10, 34);
const cir = new Circle(20);

// this won't compile, cuz we're using the wrong type to make this comparison
rect.compare(cir);

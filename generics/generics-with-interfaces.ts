// we can use generics with functions, but with interfaces as well

// here, we're defining that a vector 2D needs x and y, but we
// also can pass a data which can be any type
interface Vector2DInterface<T> {
  x: number;
  y: number;
  data: T;
}

interface Vector3DInterface {
  x: number;
  y: number;
  z: number;
}

// creating a vector 2D with a type string for data
const vec1: Vector2DInterface<string> = {
  x: 3,
  y: 7,
  data: "vector1",
};

// creating a vector 2D with a type object for data
const vec2: Vector2DInterface<{ center: number }> = {
  x: 5,
  y: 43,
  data: {
    center: 56,
  },
};

// creating a vector 2D with a type Vector3D for data
const vec3: Vector2DInterface<Vector3DInterface> = {
  x: 7,
  y: 5,
  data: {
    x: 32,
    y: 32,
    z: 64,
  },
};

// with generics, we can use whatever type we want when working with functions.
// We can use then typescript to restrict that if we want

// here we're defining that this function takes any type, but
// this type must be an object. We do that by extending the object type
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);

  return {
    ...obj,
    id,
  };
};

interface UserInterface {
  name: string;
}

const kevin: UserInterface = {
  name: "Kevin",
};

// we're telling addId, which is a generic function,
// that we wanna use it. And, also, the type of data inside it
// will be UserInterface
const newUser = addId<UserInterface>(kevin);

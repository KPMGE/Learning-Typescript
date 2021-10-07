// we can use enums in typescript. They are very handy, because
// we can use them as a datatype!

enum StatusesEnum {
  NOTSTARTED = "Not Started",
  INPROGRESS = "In Progress",
  DONE = "Done",
}

// this interface has a field with a type StatusesEnum,
// so this is very good, because now, we cannot assign
// nothing but StatusesEnum's values, and it is so many safer
// then define a field with type string for example
interface TaskInterface {
  id: string;
  status: StatusesEnum;
}

// we cannot assign values outside enum!
const inProgessTask: TaskInterface = {
  id: "i9o123fiajd",
  status: "In progress",
};

// we can assign values from enum
const doneTask: TaskInterface = {
  id: "3125kjfadkjf",
  status: StatusesEnum.DONE,
};

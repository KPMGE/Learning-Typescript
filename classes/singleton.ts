// A singleton is a class that can be used once. So, we cannot
// create multiple instaces of that class as usual. In TS, we can
// do that by using a private constructor. Basically, the private
// keyword will kill the 'new' so, in that case, we can't create
// multiple instaces. This type of class is very useful when we need
// to ensure that a class will be created once.

class AppState {
  counter = 0;
  // once we cannot use 'new', we must use static varibles!
  private static instanceReference: AppState;

  // this prevents 'new' keyword
  private constructor() {}

  static getInstance(): AppState {
    if (AppState.instanceReference == undefined) {
      // it's fine use the new inside the class
      AppState.instanceReference = new AppState();
    }

    return AppState.instanceReference;
  }
}

// this won't work, cuz we used a private constructor!
const appState = new AppState();

// using the static instace works
const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

// we can acess and manipulate the couter using the static variable
// but we see that the only source of all information is a single class AppState
appState1.counter++;
appState2.counter++;

console.log(appState1.counter);
console.log(appState2.counter);

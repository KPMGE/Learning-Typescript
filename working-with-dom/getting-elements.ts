// when using typescript, it know nothing about our markup,
// so for example:

// this someElement has a type of Element, which is a super generic
// type. So, in order to use it correctly, we need a type assertion
const someElement = document.querySelector(".foo");

// here, the property value does not exist in type Element,
// which is a super generic class, we need a type casting.
console.log("someElement: ", someElement.value);

// now we casted from Element to a specific type, which in this case
// is HTMLInputElement. So, now typescript can check if someElement has or hasn't
// the property value
const someElement2 = document.querySelector(".bar") as HTMLInputElement;

// now it works, because someElement2 is of type HTMLInputElement, which is an
// specific class type
console.log("someElement: ", someElement2.value);

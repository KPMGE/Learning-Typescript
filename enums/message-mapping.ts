// a great practice when using enums is to use them to create any set of limited stuff
// it can be for example error messages. In that case, we get a code super readable and 
// self explaning.

enum ProductsActionTypes {
  Search = "Products Search",
  Load = "Products Load All",
  LoadFailure = "Products Load All Failure",
  LoadSuccess = "Products Load All Success"
}

// we can use that constants with meaningful messages now!

function loadProduct() {
  // some logic here
  if (// load failure) {
    console.log(ProductsActionTypes.LoadFailure);
  } else {
    console.log(ProductsActionTypes.LoadSuccess);
  }
}

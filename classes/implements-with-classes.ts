// we know that if we use the implements keyword, we can enforce
// that a certain class will implement the interface. this is a good
// practice, cuz it makes clearer the goal of the code.
//
// So, we can use implements with a class as well, it sounds weird
// at the first glance, but TS is smart enough to know that, if we
// use implments and then give a name of a class, we must implementa
// all public methods of that given class.

// interface is used here as a type.
interface ProductInterface {
  name: string;
  price: number;
}

// interface is used here as a blueprint to enforce that a
// class will be implementing some signature.
interface ProductServiceInterface {
  sellProduct(product: ProductInterface): ProductInterface;
  removeProduct(product: ProductInterface): ProductInterface;
}

// this class implements the ProductServiceInterface, so it must implement all its methods!
class ProductService implements ProductServiceInterface {
  sellProduct(product: ProductInterface): ProductInterface {
    console.log(`The product ${product.name} was selled`);
    return product;
  }

  removeProduct(product: ProductInterface): ProductInterface {
    console.log(`The product ${product.name} was removed`);
    return product;
  }
}

// so, now, we can create a mockProductService, which will be using some dummy data for tests for example
// we can enfoce that this class will have the same public methods as ProductService to do that, we can use
// implements again.

class MockProductService implements ProductService {
  sellProduct(product: ProductInterface): ProductInterface {
    console.log(`The product ${product.name} was selled by mock class`);
    return product;
  }

  removeProduct(product: ProductInterface): ProductInterface {
    console.log(`The product ${product.name} was removed by mock class`);
    return product;
  }
}

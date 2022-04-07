interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}
interface Store {
  [key: string]: Product;
}
class Cart {
  protected user: User;
  private store: Store;
  constructor(user: User) {
    this.user = user;
    this.store = {};
  }
  put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}

const cart1 = new Cart({ name: "john" });

class PromotionCart extends Cart {
  addPromotion() {
    this.user;
  }
}

const cart2 = new PromotionCart({ name: "Kekw" });

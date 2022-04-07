interface Vegitable {
  v: string;
}
interface Meat {
  m: string;
}
interface Cart2<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart11: Cart2<string> = {
  getItem() {
    return {
      m: "",
    };
  },
};

cart11.getItem();

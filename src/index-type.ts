interface Props {
  name: string;
  [key: string]: string;
}

const p: Props = {
  name: "hey",
  a: "d",
  b: "e",
  c: "k",
};

p["a"];
p.name;
p.c;

let keys: keyof Props;

interface U {
  name: string;
  age: number;
  hello(message: string): void;
}

let keysOfUser: keyof U;

let helloMethod: U["hello"];

helloMethod = function (msg: string) {
  console.log(msg);
};

helloMethod("asd");

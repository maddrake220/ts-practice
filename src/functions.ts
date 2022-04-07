function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 4);

function buildUserInfo(name: string, email: string) {
  return { name, email };
}

const r2 = buildUserInfo("jake", "jwchoi@gmail.com");

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}
function store(type: "통조림"): Storage;
function store(type: "아이스크림"): ColdStorage;

function store(type: "통조림" | "아이스크림") {
  if (type === "통조림") {
    return { a: "통조림 " };
  }
  if (type === "아이스크림") {
    return { b: "아이스크림" };
  }
  throw new Error("unsupported type");
}

const s = store("통조림");

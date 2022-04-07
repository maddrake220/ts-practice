function createPromise<T>(x: T, timeout: number) {
  return new Promise((resolve: (v: T) => void, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

createPromise(1, 100).then((v) => console.log(v));

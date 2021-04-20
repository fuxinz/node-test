console.log(1);

process.nextTick(() => console.log(2));

new Promise((resolve, reject) => {
  resolve(3);
  reject("error");
}).then((resolve) => console.log(resolve));

setImmediate(() => {
  console.log(5);
});

setTimeout(() => console.log(4), 0);

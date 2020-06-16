const promise = new Promise((resolve, reject) => {
  //this can only resolve OR reject once.
  resolve({
    name: 'nishi',
    gf: 'lolla'
  });
  // setTimeout(() => {
  //   reject('something went wrong.');
  // }, 3000);
});
console.log('before');

promise.then((data) => { // data = the resolve/rejected stuff.
  console.log('1', data);

  return new Promise((resolve, reject) => {
    resolve('other promise');
  });
}).then((str) => {
  console.log('does it run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
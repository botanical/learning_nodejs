console.log('Starting app');

// non-blocking I/O
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout works');
}, 0);

console.log('Finishing up');

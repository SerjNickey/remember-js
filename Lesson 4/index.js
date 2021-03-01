//Event loop

console.log("Start");

setTimeout(() => console.log("Async Start 4"), 1000);
setTimeout(() => console.log("Async Start 3"), 0);

console.log("Start 2");

console.log("End");

// 'Call Stack' / 'Web Apis' 'Callback Queue'

function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Siarhei",
  age: 27,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is: ${this.age}`);
    console.log(`Job is: ${job}`);
    console.log(`Phone is: ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

person.logInfo.bind(lena, "Frontend", "123-45-67")();
person.logInfo.call(lena, "Frontend", "123-45-67");
person.logInfo.apply(lena, ["Frontend", "123-45-67"]);

///========

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map((i) => i * n);
// }

Array.prototype.multBy = function (n) {
  console.log(this.map((i) => i * n));
};

array.multBy(2);

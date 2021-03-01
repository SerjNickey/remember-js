const person = new Object({
  name: "Siarhei",
  age: 27,
  greet: function () {
    console.log("Greet");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello");
};

const lena = Object.create(person);
lena.name = "Lwna";

const str = new String("I am a string");

const x = ["Hello", 1];
const arr = new Array(x);

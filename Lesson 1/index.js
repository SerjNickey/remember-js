const person = new Object({
  name: "Siarhei",
  age: 27,
  greet: function () {
    console.log("Greet");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hwllo");
};

const lena = Object.create(person);
lena.name = "Elena";

const str = new String("I am a string");

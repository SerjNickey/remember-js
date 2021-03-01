const fex = {
  rex: () => console.log("REX", this),
  test: function () {
    console.log("TEST", this);
  },
  name: "Siarhei",
  age: 27,
  logInfo: function (city = "Minsk") {
    console.group(`${this.name}'s info:`);
    console.log(`Name is: ${this.name}`);
    console.log(`Age is: ${this.age}`);
    console.log(`City is: ${city}`);
    console.groupEnd();
  },
};

// function auf() {
//   console.log("AUF", this);
// }

// const aufNewCon = auf.apply(fex);

const lena = {
  name: "Elena",
  age: 19,
};

fex.logInfo();
fex.logInfo.bind(lena, "Kiev")();
fex.logInfo.call(lena, "Kiev");
fex.logInfo.apply(lena, ["Kiev"]);

/// ========

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map((i) => i * n);
// }

Array.prototype.multBy = function (n) {
  console.log(
    "multBy",
    this.map((i) => i * n)
  );
};

array.multBy(3);

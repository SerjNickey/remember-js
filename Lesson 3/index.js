// function createCulcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const ska = createCulcFunction(42); // Возвращает новую функцию
// ska();
// const pad = createCulcFunction(21);
// pad();

// function createInvrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createInvrementor(1);
// const addTen = createInvrementor(10);

// // console.log(addOne(22));
// // console.log(addOne(55));
// console.log(addTen(199));
// console.log(addTen(33));

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));

// console.log(ruUrl("yandex"));
// console.log(ruUrl("vk"));

/*
    Написать свою функцию bind
    Пример работы:

    function logPerson() {
        console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
    }

    const person1 = {name: 'Jack', age: 32, job: 'Medic'}
    const person2 = {name: 'Amy', age: 28, job: 'Reporter'}

    bind(person1, logPerson)
    bind(person2, logPerson)
*/

// function bind(context, fn) {
//   return function () {
//     context.newFn = fn;
//     return context.newFn();
//   };
// }

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Jack", age: 32, job: "Medic" };
const person2 = { name: "Amy", age: 28, job: "Reporter" };

const Jack = bind(person1, logPerson);
const Amy = bind(person2, logPerson);

Jack();
Amy();

const age = 21;
const school = "A.K. school";
const isPassed = true;
// let isDeveloper;

const bottle = {
  brand: "apple",
  price: 45,
  color: "white",
  "is-Clean": true,
};

// access object property

console.log(bottle.price);
console.log(bottle["color"]);
console.log(bottle["is-Clean"]);

// set object propertyset object property

bottle.price = 20;
bottle["color"] = "Black";
bottle["is-Clean"] = false;

console.log(bottle.price);
console.log(bottle["color"]);
console.log(bottle["is-Clean"]);
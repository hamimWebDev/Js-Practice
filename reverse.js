const sentence = "I am learning wev dev";

let reverse = "";
for (const letter of sentence) {
  reverse = letter + reverse;
}

let rev = "";

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  rev = letter + rev;
}

const reverse2 = sentence.split("").reverse().join("");
console.log(rev);

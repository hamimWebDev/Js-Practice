function onlyEvenNum(numbers) {
  const even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
}

const num = [1, 12, 42, 15, 13, 12, 45, 19, 78];

const even = onlyEvenNum(num);
console.log(even);

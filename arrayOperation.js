function sumOfNumber(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  return sum;
}

const num = [1, 2, 3, 4, 5, 6, 78, 9, 10, 12];

const sum = sumOfNumber(num);

console.log(sum);

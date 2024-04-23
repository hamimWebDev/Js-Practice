function evenString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("Even Size");
  } else {
    console.log("Odd Size");
  }
}

// evenString("Dhaka");

// evenString("Faka");

function doubleOrTriple(num, condi) {
  if (condi === true) {
    const result = num * 3;
    return result;
  } else if (condi === false) {
    const double = num * 2;
    return double;
  }
}

// doubleOrTriple(5, true)
// doubleOrTriple(5, false)

function numberFoElements(number) {
  const len = number.length;
  console.log(len);
}

numberFoElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);

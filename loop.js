const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
  isNew: true,
};

// for of in array
// for in of object
for (const props in mobile) {
  //   console.log(props);
  //   console.log(mobile[props]);
}

const keys = Object.keys(mobile);

for (const key of keys) {
  console.log(key);
  console.log(mobile[key]);
}

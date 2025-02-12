let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = number.filter((el) => {
  //finding even number
  return el % 2 == 0;
});
let odd = number.filter((el) => {
  //finding odd number
  return !(el % 2 == 0);
});
console.log(even);
console.log(odd);

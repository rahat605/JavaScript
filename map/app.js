let arrStudent = [
  {
    name: "Rahat",
    marks: 90,
  },
  {
    name: "Borshon",
    marks: 99,
  },
  {
    name: "Jim",
    marks: 80,
  },
];

let gpa = arrStudent.map((el) => {
  //calculating the gpa
  return el.marks / 10;
});
console.log(gpa);

let num = [1, 2, 3, 4];
let double = num.map((el) => {
  //doubling the number
  return el * 2;
});

console.log(double);

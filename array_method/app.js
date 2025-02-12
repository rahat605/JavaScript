let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};

arr.forEach(print);

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

arrStudent.forEach((student) => {
  //printing students marks
  console.log(student.marks);
});

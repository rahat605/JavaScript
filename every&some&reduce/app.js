let testNum = [2, 4, 6]; //Example of every
let ans = testNum.every((el) => el % 2 == 0);
console.log(ans);

let testSome = [2, 4, 6, 5]; //Example of some
let ans2 = testSome.some((el) => el % 2 == 0);
console.log(ans2);

let reduceNum = [1, 2, 3, 4]; //Example of reduce
let finalVal = reduceNum.reduce((res, el) => res + el);
console.log(finalVal);

let testArr = [1, 2, 3, 4, 13, 6, 7, 8, 9]; //Find the max value using reduce
let maxVal = testArr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(maxVal);

function sum(a, b = 2) {
  //default parameter
  return a + b;
}
console.log(sum(1));

// Spread
let arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));

// spred with object literals
const data = {
  email: "rahat@gmail.com",
  password: "abcd",
};

const dataCopy = { ...data, id: 10 };
console.log(dataCopy);

// Rest
function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("You gave us : ", args[i]);
  }
}

function sum2(...args) {
  return args.reduce((sum, el) => sum + el);
}

function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

// Destructuring
let names = ["Rahat", "Borshon", "Jim", "Shahriar"];
let [winner, runnerup, ...others] = names;

const student = {
  name: "Rahat",
  age: 25,
  class: 12,
  username: "rahat605",
  password: "abc",
};

let { username, password, name } = student;
let { age: year, class: section } = student;

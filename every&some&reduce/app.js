let testNum = [2, 4, 6]; //Example of every
let ans = testNum.every((el) => el % 2 == 0);
console.log(ans);

let testSome = [2,4,6,5]; //Example of some
let ans2 = testSome.some((el)=>el%2==0);
console.log(ans2);

let reduceNum = [1,2,3,4]; //Example of reduce
let finalVal = reduceNum.reduce((res,el)=>res+el);
console.log(finalVal);
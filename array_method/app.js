let arr = [1,2,3,4,5];

let print = function (el){
    console.log(el);
}

let arrStudent = [{
    name: "Rahat",
    marks: 90
},{
    name: "Borshon",
    marks: 99
},{
    name: "Jim",
    marks: 80
}];

arrStudent.forEach((student) => {  //printing students marks
    console.log(student.marks);
});

arr.forEach(print);

let gpa = arrStudent.map((el)=>{  //calculating the gpa
    return el.marks/10;
});
console.log(gpa);

let num = [1,2,3,4];
let double = num.map((el)=>{  //doubling the number
    return el*2;
});

console.log(double);


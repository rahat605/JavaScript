let arr = ["Rahat",12,10,"Male"];
let info = [2388,90];
console.log(info);
let fruits = ["Mango","Apple","Litchi"];
console.log(fruits);
console.log(fruits.push("Orange"));

let months= ["Januray","July","March","August"];
months.shift();
months.shift();
months.unshift("June");
months.unshift("July");

// slice example

let str = "Rahatg";
console.log(str.slice(-2));

// splice example

let colors = ["red","yellow","orange","blue","green"]
console.log(colors.splice(3));
console.log(colors);
console.log(colors.splice(0,0,"skyblue","black"));
console.log(colors);
console.log(colors.splice(3,0,"guu"));
console.log(colors);

// sorting
console.log(colors.sort()) ;

// practice question
let mash = ["january","july","march","august"];
mash.shift();
mash.shift();
mash.unshift("june");
mash.unshift("july");
console.log(mash);


// task2
let lan=["C","C++","C#","html","javascript","python","java","C#","SQL"];
lan.reverse();
console.log(lan.indexOf("javascript"));


//Tik Tac Toe Game 
let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);
game[0][1]="O";

//Practice Question 1
let num = [7,9,0,-2];
let n = 3;
console.log(num.slice(0,n));

//Practice Question 2
let num2 = [7,9,0,-2];
let n2 = 3;
console.log(num.slice(-n));

//Practice Question 3
let str2 = "This is task 3";
if (str2.length==0){
    console.log("This is an empty string");
}else{
    console.log("This is not an empty string");
}

//Practice Question 4
let str3 = "HeLlO My FrieND";
let idx = 3;

if (str3[idx]==str3[idx].toLowerCase()){
    console.log("The character is lower case");
}else{
    console.log("The character is not lower case");
}

//Practice Question 5
let str4 = " HELLO    ";
console.log(str4.trim());

//Practice Question 6
let arr2 = ["Rahat","Kuril",25,6];
let elem = "Rahat";

if(arr2.indexOf(elem)!=-1){
    console.log("Element does exists on the array");
}else{
    console.log("Element does not exists on the array");
}
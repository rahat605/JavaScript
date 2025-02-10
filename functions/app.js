function hello(){
    console.log("Hello world");
}
//Function to create number from 1 to user input
function print1ton(n){
    for(let i=1; i<=n; i++){
        console.log(i);
    }
}

//Printing Poem function
function printPoem(){
    console.log("Twinkle Twinkle little star!");
    console.log("How I wonder what you are??");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky!!");
}

//Dice 1 to 6 random number
function diceGame(){
    let ran = Math.floor(Math.random()*6+1);
    console.log(ran);
}

//Average of three number
function averageNum(a,b,c){
    let avg = (a+b+c)/3;
    console.log("The Average Number is =",avg);
}

//Multiplication table
function multiplicationTable(t){
    for (let j=1; j<=t*10; j++){
        if(j%t==0){
            console.log(j);
        }
    }
}
//Sum of number 1 to n
function sumN(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;}
        console.log("The sum is =",sum);
}
//Concate all strings in an array
let str = ["Hi","Hello","Bye","Tata"];
function concateString(str){
    let result;
    for (let i=0; i<str.length ; i++){
        result = result + str[i];
    }
    console.log(result);
}


let randooom = Math.ceil(Math.random()*6);
console.log("Random number is ",randooom);

// Try and catch
try{
    console.log(a);
}catch{
    console.log("Variable a doesn't exists");
}

// Arrow function
const sum = (a,b) => {
    console.log(a+b);
    // return a+b;
}

const cube = n => {
    return n*n;
}

const mul = (a,b) => a*b;

// Time out function
console.log("Hello I am waiting for your reply!!");
setTimeout(()=>{
    console.log("Hey How are you?");
},2000);
console.log("Typing......");

// Set Interval function 
console.log("Testing set time out");
setInterval(()=>{
    // console.log("Hello");
},2000);
setInterval(()=>{
    // console.log("Hi");
},2000);



cube(3);
sum(1,2);
hello(); //calling hello and user input function
print1ton(5); //calling the user input to num count function
printPoem();
diceGame();
averageNum(12,10,5);
multiplicationTable(2);
sumN(3);
concateString(str);
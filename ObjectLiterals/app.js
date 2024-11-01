const student = {
    name: "Rahat",
    age: 25,
    marks: 90,
    city: "Dhaka"
};

const post = {
    username: "@rahat605",
    content: "Winning Moment",
    likes: 200,
    reposts: 5,
    tags: ["@borshon","@nahin","@rohan"]
};

student.city = "Rangpur";
student.result = 3.52;
post.comments = 17;
student.recent = ["SQA","Front End","Bekar"];

//object of object

const studentList = {
    rahat:{
        marks: 95,
        grade: "A+",
        city: "Dhaka"
    },
    rion:{
        marks: 65,
        grade: "C+",
        city: "Rangpur"
    },
    maruf:{
        marks: 80,
        grade: "A+",
        city: "Chittagoan"
    }
}

// array of object

const studentListArr = [
    {   name:"Rahat",
        marks: 95,
        grade: "A+",
        city: "Dhaka"},

    {   name:"Rion",
        marks: 65,
        grade: "C+",
        city: "Rangpur"},

    {   name:"Maruf",
        marks: 80,
        grade: "A+",
        city: "Chittagoan"}
]

// Math Object
let dice = Math.floor(Math.random()*6+1);
console.log(dice);
 
// Task
const car = {
    name:"BMW",
    model:2012,
    color:"Red"
}
console.log(car.name);

// Task2
const Person = {
    name:"Borshon",
    age:26,
    city:"California"
}

Person.city = "New York";
Person.country = "United States";
console.log(Person);


// Task3
let random1to100 = Math.floor(Math.random()*100+1);
console.log(random1to100);

// task4
let random1to5 = Math.floor(Math.random()*5+1);
console.log(random1to5);

// Guessing Game
const max = prompt("Enter the maximum number for this task");
const ran = Math.floor(Math.random()*max+1);
console.log(ran);
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("User Quit the Game");
        break;
    }

    if(guess == ran){
        console.log("You got it right!! Congratulations");
        break;
     } else if(guess > ran){
       guess = prompt("Your guess is too big! Please try again");
     } else if(guess < ran){
        guess = prompt("Your guess is too small! Please try again!");
     }
    
}
// if else statement
let size = "XL";
if(size  == "XL"){
    console.log("The price is Rs.250.");
} else if(size == "L"){
    console.log("The price is Rs. 200.");
} else if (size == "M"){
    console.log("The price is Rs.100.")
} else if(size == "S"){
    console.log("The price is Rs.50.")
}

let marks = 80;
if(marks>33){
    console.log("CONGRATES");
    if(marks>=80){
        console.log("YOU GOT A+");
    }
} else{
    console.log("FAILED");
}


let word = "good string";
if ((word[0]==='a') && (word.length>3)){
    console.log("This is a good string");
} else {
    console.log("This is not a good string");
}
;

let num = 12;
if ((num%3===0) && ((num-1===15)||(num-1===11))){
    console.log("Safe");
}else{
    console.log("Unsafe");
};


let string = "";
if(string){
    console.log("String is not empty");
}else{
    console.log("String is empty");
}

let color = "red";
switch (color) {
  case "red":
    console.log("STOP");
    break;
  case "yellow":
    console.log("SLOW DOWN");
    break;
  case "green":
    console.log("GO");
    break;
  default:
    console.log("Broken Light");
}

let day = 4;

switch (day) {
  case 1:
    console.log("Friday");
    break;
  case 2:
    console.log("Saturday");
    break;
  case 3:
    console.log("Sunday");
    break;
  case 4:
    console.log("Monday");
    break;
  case 5:
    console.log("Tuesday");
    break;
  case 6:
    console.log("Wednesday");
    break;
  case 7:
    console.log("Thursday");
}


alert("Hello user. Welcome");
prompt("Type your name");
console.error("ERROR");
console.warn("Warning")
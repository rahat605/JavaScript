// Odd number from start
for (let i=1; i<=10; i++){
    if(i%2!==0){
        console.log(i);
    }
}
// Odd number from bottom
for (let i=10; i>=1; i--){
    if(i%2!==0){
        console.log(i);
    }
}
// Even number from start
for (let i=2; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}
// Even number from bottom
for (let i=10; i>=2; i--){
    if(i%2==0){
        console.log(i);
    }
}
// 5 Table 
for (let i=1; i<=50; i++){
    if(i%5==0){
        console.log(i);
    }
}

// user input
let n = prompt("Write your number = ");
n = parseInt(n);

for (let i=n; i<=n*10; i++){
    if(i%n==0){
        console.log(i);
    }
}

//user input odd number 
let n2 = prompt("Enter the number you want to check =  ");
n2 = parseInt(n2);
if(n2%2==!0){
    console.log("The number is odd number");
}else{
    console.log("The number is an even number");
}

for (let i=1; i<=3; i++){
    console.log(`For loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}


// while loop
let i=0;
while (i<=10){
    console.log(i);
    i=i+1;
}

// Guessing Game using while loop
let fav = "Iron Man";
let guess = prompt("Guess the movie name");
while(guess!=fav){
    if(guess=="quit"){
        console.log("You have quit the Game!");
        break;
    }
    guess = prompt("Wrong Guess Pleae try again");
}
if(guess==fav){
    console.log("You are right, Congratulations!!");
}

// Loops with Array
let fruits = ["Apple","Mango","Banana","Litchi","Orange"];
for (let i=0; i<fruits.length;i++){
    console.log(i, fruits[i]);
}

for (let j=fruits.length-1; j>=0; j--){
    console.log(j, fruits[j]);
}

//Nested loop with nested array
let heroes = [["Iron Man","Spider Man","Thor"],["Super Man","Wonder Women","Flash"]];

for (let i=0; i<heroes.length; i++){
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`The name of those heroes ${heroes[i][j]}`);
    }
}

//For of loop
let fruits2 = ["Apple","Mango","Banana","Litchi","Orange"];
for (fruit of fruits){
    console.log(i);
}


//Nested For Of Loop
let heroes2 = [["Iron Man","Spider Man","Thor"],["Super Man","Wonder Women","Flash"]];
for(hero of heroes2){
    for(hname of hero){
        console.log(hname);
    }
}
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
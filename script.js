

console.log("\nIf-else condition");

let x = 0;

if (x > 0) {
    console.log("Your number is bigger than 0");
} else if (x < 0) {
    console.log("Your number is smaller than 0");
} else {
    console.log("Your number is 0");
}

console.log("\nSwitch Statement");

var day = 3
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
}

console.log("\nFor loop + break");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("\nFor loop + continue");

for (let y = 1; y <= 5; y++) {
    if (y === 3) {
        continue;
    }
    console.log(y);
}

console.log("\nWhile loop");

let w = 1;
while (w <= 5) {
    console.log(w++);
}

console.log("\nDo-while loop");

var z = 1;
do {
    console.log(z);
    z++;
}
while (z <= 5);

console.log("\nScope & Context");

let globalVar = "I'm global!";

function globalscope() {
    let localVar = "I'm local!";
    console.log(localVar);
    console.log(globalVar);

}

globalscope();
// console.log(globalVar) // Available globally
// console.log(localVar)  // Not accessible outside of previous function.


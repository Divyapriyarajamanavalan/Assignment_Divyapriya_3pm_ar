// for loop

// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Number:", i);
}


//while loop

// Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log("While Loop Number:", i);
    i++;
}

//do while loop

// Print numbers from 1 to 5
let j = 1;
do {
    console.log("Do While Loop Number:", j);
    j++;
} while (j <= 5);


//for of loop (Array)

// Print all elements of an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


//for in loop (Object)

// Print all properties of an object
let student = { name: "Divyapriya", age: 22, course: "IT" };
for (let key in student) {
    console.log(key + ":", student[key]);
}

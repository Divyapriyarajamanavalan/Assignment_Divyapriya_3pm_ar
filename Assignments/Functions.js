//Simple Function

function greet() {
    console.log("Hello, Welcome to JavaScript!");
}
greet();  

//Functions with parameters

function addNumbers(a, b) {
    console.log("Sum is:", a + b);
}
addNumbers(5, 10);

// Functions with Return values

function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 6);
console.log("Multiplication Result:", result);

//Anonymous Function (function expression)

let square = function(num) {
    return num * num;
};
console.log("Square of 7 is:", square(7));

//Arrow function(ES6)

let divide = (a, b) => a / b;
console.log("Division Result:", divide(20, 4));

//Function inside object

let student = {
    name: "Deepashree",
    course: "ECE",
    showDetails: function() {
        console.log(this.name + " is studying " + this.course);
    }
};
student.showDetails();




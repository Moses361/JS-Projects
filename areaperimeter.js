



// function calculateArea(myRadius) {
//   return myRadius * myRadius * Math.PI;
// }

// function MyArea(myRadius) {
//   var area = calculateArea(myRadius);
//   console.log("A circle with a " + myRadius + " centimeter radius has an area of " + area + " square centimeters.");
// }

// var myRadius = 7; // Fixed radius of 7 cm
// MyArea(myRadius);



// function calculateRectangleArea(length, width) {
//     return length * width;
//   }

//   function calculateRectanglePerimeter(length, width) {
//     return 2 * (length + width);
//   }

//   function calculateRectangleProperties() {
//     var length = parseFloat(prompt("Enter the length of the rectangle:"));
//     var width = parseFloat(prompt("Enter the width of the rectangle:"));

//     var area = calculateRectangleArea(length, width);
//     var perimeter = calculateRectanglePerimeter(length, width);

//     console.log("The area of the rectangle is: " + area);
//     console.log("The perimeter of the rectangle is: " + perimeter);
//   }

//   calculateRectangleProperties();



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateRectanglePerimeter(length, width) {
  return 2 * (length + width);
}

function calculateRectangleProperties() {
  rl.question("Enter the length of the rectangle: ", function(lengthInput) {
    rl.question("Enter the width of the rectangle: ", function(widthInput) {
      const length = parseFloat(lengthInput);
      const width = parseFloat(widthInput);

      const area = calculateRectangleArea(length, width);
      const perimeter = calculateRectanglePerimeter(length, width);

      console.log("The area of the rectangle is: " + area);
      console.log("The perimeter of the rectangle is: " + perimeter);

      rl.close();
    });
  });
}

calculateRectangleProperties();
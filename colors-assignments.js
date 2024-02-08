const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

let joinedString = colors.join();
console.log(joinedString);
colors.splice(1, 2, 'purple', 'pink');
console.log(colors);
colors.copyWithin(0, 1, 3);
console.log(colors);
let colorsCase = colors.map((color) => color.toUpperCase());
console.log(colorsCase);
let startsWithB = colors.find((color) => color.startsWith("b")); 
console.log(startsWithB);
let selectedColors = colors.slice(1, 4);
console.log(selectedColors);

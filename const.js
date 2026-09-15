const numbers = [10, 20, 30, 40, 50];
console.log("numbers:"+ numbers);

document.writeln("Original Array: "); 
document.writeln(numbers);   
document.writeln ("<br>");
document.writeln("Original Array: " + numbers + "<br>");

// Update
numbers[1] = 200;
document.writeln("After Update of second element: " + numbers + "<br>");

 //Delete
numbers.splice(3, 2);
document.writeln("After Delete of 40 and 50: " + numbers + "<br>");

// Add
numbers.push(60);
document.writeln("After Add: " + numbers + "<br>");
//delete
numbers.pop();
document.writeln("After pop: " + numbers + "<br>");
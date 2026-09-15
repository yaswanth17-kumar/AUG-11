const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

document.writeln("Numbers in constant array variable are: " + numbers + "<br>");


const mappedArray = numbers.map(num => num * 10);
document.writeln("After map(): " + mappedArray + "<br>");

const filteredArray = numbers.filter(num => num > 50);
document.writeln("After filter(): " + filteredArray + "<br>");

const sum = numbers.reduce((acc, num) => acc + num, 0);
document.writeln("Sum using reduce(): " + sum + "<br>");
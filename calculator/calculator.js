function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
}

function multiply (numbers) {
	return numbers.reduce((acc, num) => acc * num, 1);
}

function power(x, y) {
	return x**y;
}

function factorial(x) {
	if( x < 0 ) throw new Error('Factorial does not work for negative numbers');
	return (x === 0) ? 1 : x * factorial(x - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

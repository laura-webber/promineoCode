let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('Bob', 'McKenzie'));

let someFunction = (a, b) => {
	let result = '';
	for (let i = 0; i < b; i++){
	result += a;
	}
	return result;
}

console.log(someFunction('Hello',3));


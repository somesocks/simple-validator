var Validator = require("simple-validator");

var userSchema = {
	name : Validator.isString(),
	age : Validator.isNumber(),
	gender : Validator.isOneOf("male","female"),
	living : Validator.isBoolean(),
	address : {
		street : Validator.isString(),
		city : Validator.isString(),
		country : Validator.isString(),
	}
};

var UserValidator = new Validator(userSchema);

var userOne = {
	name : "Anna",
	age : 33,
	gender : "female",
	living : true,
	address : {
		street : "Peachtree Street",
		city : "Atlanta",
		country: "USA"
	}
};

var userTwo = {
	age : 33,
	gender : "female",
	living : true,
	address : {
		street : "Peachtree Street",
		city : "Atlanta",
		country: "USA"
	}
};

var userThree = {
	name : "Anna",
	age : "33",
	gender : "female",
	living : true,
	address : {
		street : "Peachtree Street",
		city : "Atlanta",
		country: "USA"
	}
};

var userFour = {
	name : "Anna",
	age : 33,
	gender : "female",
	living : true,
	address : {
		street : "Peachtree Street",
		city : "Atlanta",
		country: "USA"
	}
};

console.log("Test 1 passed: " + (UserValidator(userOne) === true));
console.log("Test 2 passed: " + (UserValidator(userTwo) === false));
console.log("Test 3 passed: " + (UserValidator(userThree) === false));
console.log("Test 4 passed: " + (UserValidator(userFour) === true));


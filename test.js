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

var userValidator = new Validator(userSchema);

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

console.log(UserValidator(userOne));
console.log(UserValidator(userTwo));
console.log(UserValidator(userThree));
console.log(UserValidator(userFour));


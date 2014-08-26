simple-validator
================

A simple schema-based validator for Javascript objects.  The API is designed with convenience methods to build a schema object that can be used to validate any test object.  The schema object consists of an object containing closures designed to validate individual properties of a test object.  The validation process is recursive, and fails fast.

Usage Example:

<pre><code>

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

var UserValidator = new Validator(userSchema);

var isValid = UserValidator(userOne);

</code></pre>

In the usage example, validation of userOne would follow these steps:

1) is userOne an object?

2) is userOne.name a string?

3) is userOne.age a number?

4) is userOne.gender === "male" or is userOne.gender === "female"?

5) is userOne.living a boolean?

6) is userOne.address an object?

7) is userOne.address.street a string?

8) is userOne.address.city a string?

9) is userOne.address.country a string?


For more usage examples, look in the tests.





const Valid = require('../../dist/simple-validator.js');
const { isNotEmpty } = Valid.String;

const TESTS = [
	{ input: '', expected: false },
	{ input: 'a string', expected: true },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
];

describe('isNotEmpty', () => {
	TESTS.forEach((test) => {
		it(`(${test.input})-->(${test.expected})`, () => {
			return isNotEmpty(test.input) === test.expected;
		});
	});
});



const Valid = require('../../dist/simple-validator.js');
const { isString } = Valid;

const TESTS = [
	{ input: '', expected: true },
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


describe('isString', () => {
	TESTS.forEach((test) => {
		it(`(${test.input})-->(${test.expected})`, () => {
			return isString(test.input) === test.expected;
		});
	});
});

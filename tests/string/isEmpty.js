

const Valid = require('../../dist/simple-validator.js');
const { isEmpty } = Valid.String;

const TESTS = [
	{ input: '', expected: true },
	{ input: 'a string', expected: false },
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

describe('isEmpty', () => {
	TESTS.forEach((test) => {
		it(`(${test.input})-->(${test.expected})`, () => {
			return isEmpty(test.input) === test.expected;
		});
	});
});

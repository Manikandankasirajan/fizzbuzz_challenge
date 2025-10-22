import fizzbuzz from "../fizzbuzz.js";

describe("FizzBuzz", () => {
	test('returns "Fizz" for multiples of 3', () => {
		expect(fizzbuzz(3)).toBe("Fizz");
	});
	test('returns "Buzz" for multiples of 5', () => {
		expect(fizzbuzz(5)).toBe("Buzz");
	});
	test('returns "FizzBuzz" for multiples of both 3 and 5', () => {
		expect(fizzbuzz(15)).toBe("FizzBuzz");
	});
	test("returns input number for other values", () => {
		expect(fizzbuzz(2)).toBe(2);
	});
});

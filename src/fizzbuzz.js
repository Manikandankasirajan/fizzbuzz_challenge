import fizzRule from "./rules/fizzRule";
import buzzRule from "./rules/buzzRule";
import fizzBuzzRule from "./rules/fizzbuzzRule";
import defaultRule from "./rules/defaulRule";

function fizzbuzz(num) {
	const rules = [fizzRule, buzzRule, fizzBuzzRule, defaultRule];

	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}

export default fizzbuzz;

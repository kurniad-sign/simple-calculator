export default function calculateNumber(numOne, numTwo, operand) {
	const one = parseFloat(numOne);
	const two = parseFloat(numTwo);

	if (operand === '+') {
		return one + two;
	}

	if (operand === '-') {
		return one - two;
	}

	if (operand === '*') {
		return one * two;
	}

	if (operand === '/') {
		if (two === 0) {
			throw Error('Cannot divide by 0');
		}
		return one / two;
	}

	return Error('operand not defined');
}

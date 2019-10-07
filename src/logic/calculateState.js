import calculateNumber from './calculateNumber';
import isNumber from './isNumber';

export default function calculateState(state, buttonName) {
	// if button 'AC' Clicked reset state
	if (buttonName === 'AC') {
		return {
			nextNum: null,
			total: null,
			operator: null
		};
	}

	// if button '=' clicked run calculate function
	if (buttonName === '=') {
		if (state.nextNum && state.operator) {
			return {
				total: calculateNumber(state.total, state.nextNum, state.operator),
				nextNum: null,
				operator: null
			};
		} else {
			return {};
		}
	}

	if (isNumber(buttonName)) {
		if (buttonName === '0' && state.nextNum === '0') {
			return {};
		}
		// If there is an operation, update next
		if (state.operator) {
			if (state.nextNum) {
				return {
					nextNum: state.nextNum + buttonName
				};
			}

			return { nextNum: buttonName };
		}
		// // If there is no operation, update next and clear the value
		if (state.nextNum) {
			const nextNum =
				state.nextNum === '0' ? buttonName : state.nextNum + buttonName;
			return {
				nextNum,
				total: null
			};
		}

		return {
			nextNum: buttonName,
			total: null
		};
	}

	if (!state.nextNum) {
		return { operator: buttonName };
	}

	return {
		nextNum: null,
		total: state.nextNum,
		operator: buttonName
	};
}

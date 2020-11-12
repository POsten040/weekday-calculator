import { checkDay } from './../src/js/date.js';

describe('checkDay', () => {
	test('should take an inputted date and return the day of the week that corresponds to it.', () => {
		let date = 4;
		let dayOfWeek = checkDay(date);
		expect(dayOfWeek).toEqual('Friday');
	});
});

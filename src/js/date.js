export const checkDay = (num) => {
	let daysOfWeek = new Map([
		[0, 'Monday'],
		[1, 'Tuesday'],
		[2, 'Wednesday'],
		[3, 'Thursday'],
		[4, 'Friday'],
		[5, 'Saturday'],
		[6, 'Sunday'],
	]);

	let selectedDay = daysOfWeek.get(num);
	return selectedDay;
};

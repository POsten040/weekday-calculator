import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { checkDay } from './js/date.js';
// import Object from './js/object.js';
// import Post from './js/post.js';

$(document).ready(function () {
	$('#weekday-check-form').submit(function (event) {
		event.preventDefault();
		let date = new Date($('#user-date').val());
		let dayOfWeek = date.getDay();
		let textDayOfWeek = checkDay(dayOfWeek);
		$('#results')
			.empty()
			.append(
				`We got your input! On that date, the day was a ${textDayOfWeek}`
			);
	});
});

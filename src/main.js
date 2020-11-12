import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Object from './js/object.js';
// import Post from './js/post.js';

$(document).ready(function () {
	$('#weekday-check-form').submit(function (event) {
		event.preventDefault();
		var date = new Date($('#user-date').val());
		console.log(date);
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		console.log([month, day, year].join('/'));
	});
});
